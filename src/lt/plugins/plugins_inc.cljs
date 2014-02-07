(ns lt.plugins.plugins-inc
  (:require [lt.objs.app :as app]
            [lt.objs.plugins :as plugins]
            [lt.objs.files :as files]
            [lt.objs.settings :as settings]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [lt.objs.deploy :as deploy]
            [lt.objs.command :as cmd]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def plugins-file (files/join (files/lt-user-dir "settings") "plugins.edn"))

(defn validate-plugins [plugins]
  (if (every? #(every? % #{:name :version :source}) plugins)
    plugins
    (console/error "plugins.edn is invalid. All plugins must have :name, :version and :source")))

(defn read-plugins [file]
  (-> (files/open-sync file)
      :content
      ;; TODO: error message specific to plugins.edn
      (settings/safe-read file)
      validate-plugins))

(defn update-plugins []
  (let [existing-plugins (:lt.objs.plugins/plugins @app/app)
        outdated-plugins (filter
                          #(if-let [old-version (get-in existing-plugins [(:name %) :version])]
                             (deploy/is-newer? old-version (:version %))
                             true)
                          (read-plugins plugins-file))]

    (if (empty? outdated-plugins)
      (notifos/set-msg! "No plugins to update.")
      (do
        (doseq [p outdated-plugins]
          (plugins/discover-deps p))
        (notifos/set-msg! "Plugins have been updated.")))))

(cmd/command {:command ::update-plugins
              :desc "plugins-inc: Update plugins from plugins.edn"
              :exec update-plugins})

(defn save-plugins []
  (let [plugins-str (->> @app/app
                         :lt.objs.plugins/plugins
                         vals
                         (map #(select-keys % [:name :version :source]))
                         vec
                         pr-str)]
    ;; one plugin per line for easier editing and diffing
    (files/save plugins-file
                (string/replace plugins-str #"\}\s*\{" "}\n {")))
  (notifos/set-msg! "Plugins saved to plugins.edn."))

(cmd/command {:command ::save-plugins
              :desc "plugins-inc: Save plugins to plugins.edn"
              :exec save-plugins})

(comment
  (update-plugins)
  (save-plugins))

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

;; Experimental - update official plugins as well as unofficial ones that have a valid git checkout version
;; ------------


(.log js/console #js {:a 1})
(def shell (lt.util.load/node-module "shelljs"))
(.exec shell "ls" #js {:silent true})

(defn git-versions [git-plugins]
  (->> '({:name "Keymapper", :version "master", :source "https://github.com/joshuafcole/keymapper"}) #_git-plugins
       (map :name)
       (filter
        #(files/exists? (files/join plugins/user-plugins-dir %)))))


;; consider using proc.cljs
(def exec (.-exec (js/require "child_process")))

(defn git-clone [source name]
  (let [plugin-name (plugins/munge-plugin-name name)
        cmd (str "git clone " source " " plugin-name)]
    (prn cmd)
    (exec cmd
          (clj->js {"cwd" plugins/user-plugins-dir})
          (fn [err stdout stderr]
            (println stdout)
            (prn stderr err)
            ))))

(defn update-all-plugins []
  (let [existing-plugins (:lt.objs.plugins/plugins @app/app)
        [official-plugins git-plugins] ((juxt filter remove)
                                        #(re-find deploy/version-regex (:version %))
                                        (read-plugins plugins-file))
        outdated-plugins (filter
                          #(if-let [old-version (get-in existing-plugins [(:name %) :version])]
                             (deploy/is-newer? old-version (:version %))
                             true)
                          official-plugins)
        existing-git-plugins (git-versions git-plugins)]

    (if (empty? outdated-plugins)
      (notifos/set-msg! "No plugins to update.")
      (do
        (doseq [p outdated-plugins]
          (plugins/discover-deps p))
        (notifos/set-msg! "Plugins have been updated.")))))



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
   (inc 1)
  (re-find deploy/version-regex "1.11.2-beta")
  (git-clone "https://github.com/joshuafcole/keymapper" "keymapper")
  (exec (str "git clone ") #_(str "git blame -n --date short --contents - " path)
        (clj->js {"cwd" })
        (fn [err stdout stderr]
          (println stdout)
          ))
  (update-plugins)
  (save-plugins))

(ns lt.plugins.plugins-inc
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.app :as app]
            [lt.objs.plugins :as plugins]
            [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:div[:h1 "Hello from plugins-inc"]
   [:p (-> @app/appl :lt.objs.plugins/plugins vals vec pr-str)]])

(object/object* ::plugins-inc.hello
                :tags [:plugins-inc.hello]
                :name "plugins-inc"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::plugins-inc.hello))

(cmd/command {:command ::say-hello
              :desc "plugins-inc: Say Hello"
              :exec (fn []
                      (tabs/add-or-focus! hello))})

(cmd/command {:command ::save-plugins
              :desc "plugins-inc: Save Plugins"
              :exec (fn []
                      (files/save (files/join plugins/user-plugins-dir "plugins.edn")
                                  (->> @app/app
                                       :lt.objs.plugins/plugins
                                       vals
                                       (map #(select-keys % [:name :version :source]))
                                       vec
                                       pr-str))
                      (notifos/working "Plugins saved to plugins.edn."))})

(comment
  (prn plugins/user-plugins-dir)
  (plugins/discover-deps {:name "GBlame" :version "0.0.5"} (fn [] (.log js/console "DONE")))
  )

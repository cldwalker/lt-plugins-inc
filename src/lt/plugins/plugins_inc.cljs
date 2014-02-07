(ns lt.plugins.plugins-inc
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:h1 "Hello from plugins-inc"])

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

(defproject hello-ring "0.1.0-SNAPSHOT"
  :description "very basic ring application"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-ring "0.12.6"]]
  :ring {:handler hello-ring.core2/handler}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [ring/ring-core "1.9.6"]
                 [ring/ring-jetty-adapter "1.9.6"]]
  :main hello-ring.core)
(defproject my-clojure-app "0.1.0-SNAPSHOT"
  :description "A simple Clojure web app"
  :dependencies [[org.clojure/clojure "1.11.1"]
               [ring "1.10.0"]
               [compojure "1.7.0"]
               [cheshire "5.11.0"]
               [ring/ring-json "0.5.1"]
               [com.github.seancorfield/next.jdbc "1.3.894"]
               [com.zaxxer/HikariCP "5.1.0"]
               [org.postgresql/postgresql "42.7.3"]]
  :main ^:skip-aot my-clojure-app.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})


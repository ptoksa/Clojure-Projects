(defproject calculator "0.1.0-SNAPSHOT"
  :description "A simple calculator in ClojureScript"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [reagent "0.10.0"]]
  :plugins [[lein-figwheel "0.5.20"]]
  :clean-targets ^{:protect false} ["resources/public/js" "target"]
  :figwheel {:css-dirs ["resources/public"]}
  :source-paths ["src"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:main calculator.core
                         :asset-path "js/out"
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out"
                         :source-map true}}]})

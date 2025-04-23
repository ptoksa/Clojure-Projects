(defproject tictactoe "0.1.0-SNAPSHOT"
  :description "Tic-Tac-Toe in ClojureScript"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/clojurescript "1.11.60"]
                 [reagent "0.10.0"]]
  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljsbuild "1.1.8"]]
  :source-paths ["src"]
  :clean-targets ^{:protect false} ["resources/public/js" "target"]
  :figwheel {:css-dirs ["resources/public"]}
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:main tictactoe.core
                         :asset-path "js/out"
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out"
                         :source-map true}}]})


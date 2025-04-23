(ns calculator.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]))

(defonce state (r/atom {:input1 "" :input2 "" :op "+" :result nil}))

(defn parse-num [s]
  (js/parseFloat s))

(defn calculate [{:keys [input1 input2 op]}]
  (let [n1 (parse-num input1)
        n2 (parse-num input2)]
    (case op
      "+" (+ n1 n2)
      "-" (- n1 n2)
      "*" (* n1 n2)
      "/" (if (zero? n2) "Error: /0" (/ n1 n2))
      "Invalid op")))

(defn calculator-ui []
  (let [{:keys [input1 input2 op result]} @state]
    [:div
     [:h2 "Simple Calculator"]
     [:div
      [:input {:type "text"
               :placeholder "First number"
               :value input1
               :on-change #(swap! state assoc :input1 (-> % .-target .-value))}]
      [:select {:value op
                :on-change #(swap! state assoc :op (-> % .-target .-value))}
       [:option {:value "+"} "+"]
       [:option {:value "-"} "-"]
       [:option {:value "*"} "*"]
       [:option {:value "/"} "/"]]
      [:input {:type "text"
               :placeholder "Second number"
               :value input2
               :on-change #(swap! state assoc :input2 (-> % .-target .-value))}]]
     [:div
      [:button {:on-click #(swap! state assoc :result (calculate @state))} "="]]
     (when result
       [:div [:h3 "Result: "] [:p (str result)]])]))

(defn ^:dev/after-load start []
  (dom/render [calculator-ui] (.getElementById js/document "app")))

(defn init []
  (start))

(init) ;; <--- This makes sure the app actually starts

(ns tictactoe.core
  (:require [reagent.core :as r]
            [reagent.dom :as dom]))

(defonce board (r/atom (vec (repeat 9 nil))))
(defonce current-player (r/atom "X"))
(defonce winner (r/atom nil))

(def winning-lines
  [[0 1 2] [3 4 5] [6 7 8]   ; rows
   [0 3 6] [1 4 7] [2 5 8]   ; columns
   [0 4 8] [2 4 6]])         ; diagonals

(defn check-winner [board]
  (some (fn [[a b c]]
          (let [v (nth board a)]
            (when (and v (= v (nth board b)) (= v (nth board c)))
              v)))
        winning-lines))

(defn board-full? [board]
  (every? some? board))

(defn square [idx]
  [:div.square
   {:on-click (fn [_]
                (when (and (nil? (nth @board idx)) (nil? @winner))
                  (swap! board assoc idx @current-player)
                  (let [w (check-winner @board)]
                    (cond
                      w (reset! winner w)
                      (board-full? @board) (reset! winner :draw)
                      :else (swap! current-player #(if (= % "X") "O" "X"))))))}
   (nth @board idx)])

(defn board-component []
  [:div.board
   (for [i (range 9)]
     ^{:key i} [square i])])

(defn reset-game []
  (reset! board (vec (repeat 9 nil)))
  (reset! current-player "X")
  (reset! winner nil))

(defn app []
  [:div
   [:h2 "Tic-Tac-Toe"]
   [board-component]
   (cond
     (= @winner :draw) [:div.draw [:h3 "It's a draw!"]]
     @winner           [:div.winner [:h3 "Winner: " @winner]])
   [:button {:on-click reset-game} "Restart Game"]])

(defn ^:dev/after-load start []
  (dom/render [app] (.getElementById js/document "app")))

(defn init []
  (start))

(init)


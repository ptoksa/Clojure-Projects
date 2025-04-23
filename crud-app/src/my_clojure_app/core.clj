(ns my-clojure-app.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [cheshire.generate :as json-gen]
            [ring.util.response :refer [response status]]
            [next.jdbc :as jdbc]))

;; PostgreSQL connection
(def db-spec
  {:dbtype "postgresql"
   :host "localhost"
   :port 5432
   :dbname "clojuredb"
   :user "user"
   :password "secret"})

(def datasource (jdbc/get-datasource db-spec))

;; Routes

(defn list-items []
  (response (jdbc/execute! datasource ["SELECT * FROM items"])))

(defn get-item [id]
  (let [item (jdbc/execute-one! datasource ["SELECT * FROM items WHERE id = ?" id])]
    (if item
      (response item)
      (-> (response {:error "Not found"}) (status 404)))))

(defn create-item [item]
  (let [result (jdbc/execute-one! datasource
                 ["INSERT INTO items (name) VALUES (?) RETURNING *"
                  (:name item)])]
    (response result)))

(defn update-item [id item]
  (let [result (jdbc/execute-one! datasource
                 ["UPDATE items SET name = ? WHERE id = ? RETURNING *"
                  (:name item) id])]
    (if result
      (response result)
      (-> (response {:error "Not found"}) (status 404)))))

(defn delete-item [id]
  (let [res (jdbc/execute! datasource ["DELETE FROM items WHERE id = ?" id])
        deleted? (pos? (get (first res) :next.jdbc/update-count 0))]
    (if deleted?
      (response {:status "deleted"})
      (-> (response {:error "Not found"}) (status 404)))))

(defn delete-all-items []
  (jdbc/execute! datasource ["TRUNCATE TABLE items RESTART IDENTITY"])
  (response {:status "All items deleted and IDs reset"}))

(defroutes app-routes
  (GET "/" [] (response {:message "Welcome to the Clojure + PostgreSQL CRUD API"}))
  (GET "/items" [] (list-items))
  (GET "/items/:id" [id] (get-item (Integer/parseInt id)))
  (POST "/items" request (create-item (:body request)))
  (PUT "/items/:id" [id :as request] (update-item (Integer/parseInt id) (:body request)))
  (DELETE "/items/:id" [id] (delete-item (Integer/parseInt id)))
  (DELETE "/items" [] (delete-all-items))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-json-body {:keywords? true})
      wrap-json-response))

(defn -main []
  (run-jetty app {:port 3000 :join? false}))

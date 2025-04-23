# 📦 my-clojure-app

A simple CRUD API built with [Clojure](https://clojure.org/), [Leiningen](https://leiningen.org/), [Compojure](https://github.com/weavejester/compojure), [Ring](https://github.com/ring-clojure/ring), and PostgreSQL using [next.jdbc](https://github.com/seancorfield/next-jdbc).

---

## 🚀 Features

- `GET /items` – List all items  
- `GET /items/:id` – Get a specific item by ID  
- `POST /items` – Create a new item  
- `PUT /items/:id` – Update an existing item  
- `DELETE /items/:id` – Delete an item by ID  
- `DELETE /items` – Delete all items and reset ID counter

All data is stored in PostgreSQL.

---

## 🛠 Setup

### 🧱 Prerequisites

- Java (JDK 8+)
- [Leiningen](https://leiningen.org/)
- [PostgreSQL](https://www.postgresql.org/)

---

### ⚙️ Database Setup

Create a database and user in PostgreSQL:

```bash
createdb clojuredb
createuser user --createdb --pwprompt
```

Grant privileges (if needed):

```bash
ALTER USER user WITH PASSWORD 'secret';
```
Create the items table:
```bash
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
```

### 🔧 Configuration

In `core.clj`, ensure you have this PostgreSQL config:

```bash
(def db-spec
  {:dbtype "postgresql"
   :host "localhost"
   :port 5432
   :dbname "clojuredb"
   :user "user"
   :password "secret"})
```

### ▶️ Run the App

```bash
lein run
```

SApp will be available at:

```bash
http://localhost:3000
```
## 🧪 Example API Usage

### Create an item

```bash
curl -X POST -H "Content-Type: application/json" \
     -d '{"name": "Clojure Book"}' \
     http://localhost:3000/items
```
### List all items

```bash
curl http://localhost:3000/items
```
### Get one item

```bash
curl http://localhost:3000/items/1
```
### Update an item

```bash
curl -X PUT -H "Content-Type: application/json" \
     -d '{"name": "Updated Book"}' \
     http://localhost:3000/items/1
```
### Delete an item

```bash
curl -X DELETE http://localhost:3000/items/1
```
### Delete all items

```bash
curl -X DELETE http://localhost:3000/items
```

## 📁 Project Structure
```bash
my-clojure-app/
├── src/
│   └── my_clojure_app/
│       └── core.clj      ;; main app logic
├── project.clj           ;; project configuration
└── README.md             ;; this file
```
## 📦 Dependencies
This app uses:

- org.clojure/clojure
- compojure
- ring
- cheshire
- ring-json
- next.jdbc
- HikariCP
- org.postgresql/postgresql

## 🧠 Notes

- To persist schema changes, consider using `migratus` or `ragtime`.

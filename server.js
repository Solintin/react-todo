const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const PORT = 3010;
const MONGO_URI = 'mongodb://localhost/todo';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let todos_coll;

MongoClient.connect(MONGO_URI, function (err, db_conn) {
  todos_coll = db_conn.db().collection('todos');
});

app.get("/api", function (req, res) {
  todos_coll.find().toArray((err, todos) => {
    res.json(todos);
  })
});

app.post("/api", function (req, res) {
  const todo = { ...req.body, _id: req.body.id };
  todos_coll.insertOne(todo, (err, result) => {
    res.json({ todo })
  })
});

app.delete("/api/:id", function (req, res) {
  todos_coll.deleteOne({ _id: req.params.id }, (err, result) => {
    res.json(result);
  })
});

app.post("/api/:id", function (req, res) {
  todos_coll.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    (err, result) => {
      res.json(result);
    })
});

app.listen(PORT, err => console.info(`Running on ${PORT}`))
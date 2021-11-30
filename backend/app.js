const express = require("express");
const notes = require("./data/notes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/v1/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/v1/note/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

module.exports = app;

const express = require("express");
const notes = require("./data/notes");
const { notFound, errorHandler } = require("./middleware/error");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/v1/notes", (req, res) => {
  res.json(notes);
});

// Route Imports
const user = require("./routes/userRoute");
app.use("/api/v1", user);

// Middleware for Errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;

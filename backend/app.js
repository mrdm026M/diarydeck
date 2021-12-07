const express = require("express");
const { notFound, errorHandler } = require("./middleware/error");

const app = express();
app.use(express.json());

// Route Imports
const users = require("./routes/userRoute");
app.use("/api/v1", users);

const notes = require("./routes/noteRoute");
app.use("/api/v1/", notes);

const todos = require("./routes/todoRoute");
app.use("/api/v1/", todos);

// Middleware for Errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;

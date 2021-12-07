const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");

// get all todos
const getTodos = asyncHandler(async (req, res) => {
  const tasks = await Todo.find({ user: req.user._id });
  res.json(tasks);
});

// get single todo -id
const getTodoById = asyncHandler(async (req, res) => {
  const task = await Todo.findById(req.params.id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// create todo
const createTodo = asyncHandler(async (req, res) => {
  const { task } = req.body;

  if (!task) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const todo = new Todo({ user: req.user._id, task });

    const createdTodo = await todo.save();
    res.status(201).json(createdTodo);
  }
});

// update todo
const updateTodo = asyncHandler(async (req, res) => {
  const { task, completed } = req.body;

  const todo = await Todo.findById(req.params.id);

  if (todo.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (todo) {
    todo.task = task;
    todo.completed = completed;

    const updateTodo = await todo.save();
    res.json(updateTodo);
  } else {
    res.status(404);
    throw new Error("Todo not found");
  }
});

// delete todo
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (todo) {
    await todo.remove();
    res.json({ message: "Todo Removed" });
  } else {
    res.status(404);
    throw new Error("Todo not Found");
  }
});

module.exports = { getTodos, createTodo, getTodoById, updateTodo, deleteTodo };

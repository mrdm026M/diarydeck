const express = require("express");
const {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} = require("../controllers/todoController");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.route("/alltodos").get(protect, getTodos);
router.route("/createtodo").post(protect, createTodo);
router
  .route("/todos/:id")
  .get(getTodoById)
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;

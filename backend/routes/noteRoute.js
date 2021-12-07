const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.route("/allnotes").get(protect, getNotes);
router.route("/createnote").post(protect, createNote);
router
  .route("/notes/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

module.exports = router;

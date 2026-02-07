const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");


// ------ CREATE TASK
router.post("/", createTask);

//------GET ALL TASKS
router.get("/", getTasks);

//-----GET SINGLE TASK
router.get("/:id", getTaskById);

//---- UPDATE TASK
router.put("/:id", updateTask);

//----DELETE TASK
router.delete("/:id", deleteTask);

module.exports = router;

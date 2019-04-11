const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Controller
const projectController = require("../../controllers/projectController");

// Test route
router.get("/test", (req, res) =>
  res.json({ message: "Testing the projects routes" })
);

// Get all projects
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  projectController.GetAll
);

// Get one project
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  projectController.GetProject
);

// Create project
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  projectController.CreateProject
);

// Delete project
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  projectController.DeleteProject
);

// Create Task
router.post(
  "/:id/tasks",
  passport.authenticate("jwt", { session: false }),
  projectController.CreateTask
);

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Controller
const developerController = require("../../controllers/developerController");

// Test route
router.get("/test", (req, res) =>
  res.json({ message: "Testing the developer routes" })
);

// Get all developers
router.get("/", developerController.GetAll);

// Current logged in developer
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  developerController.Current
);

// Delete Developer
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  developerController.DeleteDeveloper
);

// Register developer
router.post("/register", developerController.RegisterDeveloper);

// Login
router.post("/login", developerController.Login);

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Controller
const customerController = require("../../controllers/customerController");

// Create customer
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  customerController.CreateCustomer
);

// Update customer
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  customerController.UpdateCustomer
);

// Get all customers
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  customerController.GetAll
);

// Get customer
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  customerController.GetCustomer
);

// Delete customer
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  customerController.DeleteCustomer
);

module.exports = router;

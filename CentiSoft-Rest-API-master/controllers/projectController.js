const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const mongoose = require("mongoose");
const Project = require("../models/Project");

// Load Validators
const validateProjectInput = require("../validation/project");
const validateTaskInput = require("../validation/tasks");

// Get All
exports.GetAll = (req, res) => {
  const errors = {};
  Project.find()
    .then(projects => {
      if (!projects) {
        errors.noProjects = "No projects found";
      }
      res.json(projects);
    })
    .catch(err => console.log(err));
};

// Get One Project
exports.GetProject = (req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      if (project === null) {
        return res
          .status(404)
          .json({ noProjectFound: "No project found with that ID" });
      }
      return res.json(project);
    })
    .catch(err =>
      res.status(404).json({ noProjectFound: "No project found with that ID" })
    );
};

// Create project
exports.CreateProject = (req, res) => {
  const { errors, isValid } = validateProjectInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(404).json(errors);
  }

  // Check if customer id is valid
  if (!mongoose.Types.ObjectId.isValid(req.body.customer)) {
    errors.invalidCustomerId = "Invalid customer id";
    return res.status(404).json(errors);
  }

  // Create project object
  const newProj = new Project({
    name: req.body.name,
    dueDate: req.body.dueDate,
    customer: req.body.customer
  });
  newProj
    .save()
    .then(project => res.json(project))
    .catch(err => console.log(err));
};

// Delete project
exports.DeleteProject = (req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      project.remove().then(res.json({ success: "Project is deleted" }));
    })
    .catch(err =>
      res.status(404).json({ noProjectFound: "No project found with that ID" })
    );
};

// Create task
exports.CreateTask = (req, res) => {
  const { errors, isValid } = validateTaskInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(404).json(errors);
  }
  // Check if project id is valid
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    errors.invalidProjectId = "Invalid project id";
    return res.status(404).json(errors);
  }

  Project.findById(req.params.id).then(project => {
    if (!project) {
      errors.noProjectFound = "No project found";
      return res.status(404).json(errors);
    }
    // Create new task object
    const newTask = {
      name: req.body.name,
      description: req.body.description,
      created: Date.now(),
      duration: req.body.duration,
      developer: req.body.developer
    };

    project.tasks.push(newTask);
    project
      .save()
      .then(project => res.json(project))
      .catch(err => console.log(err));
  });
};

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Developer = require("../models/Developer");

// Load Validators
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Get All
exports.GetAll = (req, res) => {
  const errors = {};
  Developer.find({}, { name: 1, email: 1 })
    .then(developers => {
      if (!developers) {
        errors.noDevelopers = "No developers found";
        return res.status(404).json(errors);
      }
      res.json(developers);
    })
    .catch(err => console.log(err));
};

// Current Developer
exports.Current = (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
};

// Delete Developer
exports.DeleteDeveloper = (req, res) => {
  const errors = {};
  Developer.findOneAndDelete({ user: req.user.id })
    .then(res.json({ message: "Deleted" }))
    .catch(err => console.log(err));
};

// Login
exports.Login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(404).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find developer by email
  Developer.findOne({ email }).then(developer => {
    if (!developer) {
      errors.email = "Developer not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, developer.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: developer.id, name: developer.name };

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 60 * 60 * 60 * 60 },
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
};

// Register new developer
exports.RegisterDeveloper = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(404).json(errors);
  }

  Developer.findOne({ email: req.body.email }).then(developer => {
    if (developer) {
      errors.email = "Email already exsists";
      return res.status(400).json(errors);
    } else {
      // Create developer object
      const newDeveloper = new Developer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Encrypt password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newDeveloper.password, salt, (err, hash) => {
          if (err) throw err;
          newDeveloper.password = hash;
          newDeveloper
            .save()
            .then(developer => res.json(developer))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

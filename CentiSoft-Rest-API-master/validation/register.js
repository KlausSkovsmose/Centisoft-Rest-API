const Validatior = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validatior.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Name must be between 2 and 40 characters";
  }

  if (Validatior.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!Validatior.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (Validatior.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (Validatior.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validatior.isLength(data.password, { min: 6, max: 50 })) {
    errors.password = "Password must be between 6 and 50 characters";
  }

  if (!Validatior.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (Validatior.isEmpty(data.password2)) {
    errors.password2 = "Confirm password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

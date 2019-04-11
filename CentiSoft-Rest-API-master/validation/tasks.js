const Validatior = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateTaskInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validatior.isEmpty(data.name)) {
    errors.name = "Project name is required";
  }

  if (Validatior.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

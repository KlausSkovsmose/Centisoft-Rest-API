const Validatior = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProjectInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.dueDate = !isEmpty(data.dueDate) ? data.dueDate : "";
  data.customer = !isEmpty(data.customer) ? data.customer : "";

  if (Validatior.isEmpty(data.name)) {
    errors.name = "Project name is required";
  }

  if (Validatior.isEmpty(data.dueDate)) {
    errors.dueDate = "Due date is required";
  }

  if (Validatior.isEmpty(data.customer)) {
    errors.customer = "Customer is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const Validatior = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.address2 = !isEmpty(data.address2) ? data.address2 : "";
  data.zip = !isEmpty(data.zip) ? data.zip : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  if (Validatior.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (Validatior.isEmpty(data.address)) {
    errors.address = "Address is required";
  }
  if (Validatior.isEmpty(data.zip)) {
    errors.zip = "Zip is required";
  }
  if (Validatior.isEmpty(data.city)) {
    errors.city = "City is required";
  }
  if (Validatior.isEmpty(data.country)) {
    errors.country = "Country is required";
  }
  if (!Validatior.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }
  if (Validatior.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (Validatior.isEmpty(data.phone)) {
    errors.phone = "Phone is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Load routes
const developers = require("./routes/api/developers");
const customers = require("./routes/api/customers");
const projects = require("./routes/api/projects");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

// Use routes
app.use("/api/developers", developers);
app.use("/api/customers", customers);
app.use("/api/projects", projects);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

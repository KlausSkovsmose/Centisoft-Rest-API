const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "customers"
  },
  tasks: [
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      created: {
        type: Date,
        default: Date.now
      },
      duration: {
        type: Number
      },
      developer: {
        type: Schema.Types.ObjectId,
        ref: "developers"
      }
    }
  ]
});

module.exports = Project = mongoose.model("Projects", ProjectSchema);

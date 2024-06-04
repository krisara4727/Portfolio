const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: Boolean,
  },
  image: {
    filename: String,
    size: String,
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
  },
  git: { type: String },
  hosted: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);

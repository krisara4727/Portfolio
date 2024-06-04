const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    filename: String,
    size: Number,
    data: Buffer,
    contentType: String,
  },
  proficiency: {
    type: String,
  },
  score: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
  },
});

module.exports = mongoose.model("Skills", SkillsSchema);

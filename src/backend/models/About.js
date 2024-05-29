const mongoose = require("mongoose");

const educationExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
  },
  designation: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  timePeriod: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  type: {
    type: String,
  },
});

const AboutSchema = new mongoose.Schema({
  age: {
    type: Number,
  },
  experience: {
    type: String,
  },
  degree: {
    type: String,
  },
  specialization: {
    type: String,
  },
  graduation: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
  experienceData: [
    {
      type: educationExperienceSchema,
    },
  ],
  education: [
    {
      type: educationExperienceSchema,
    },
  ],
});

module.exports = mongoose.model("About", AboutSchema);

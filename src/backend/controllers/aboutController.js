const About = require("../models/About");

exports.getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAbout = async (req, res) => {
  console.log(req.body, "req/body");
  const body = { ...req.body };
  const about = new About(body);
  try {
    const newAbout = await about.save();
    res.status(201).json(newAbout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

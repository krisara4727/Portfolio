const Skills = require("../models/Skills");
const path = require("path");

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    skills?.sort((a, b) => b.score - a.score);
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.postSkill = async (req, res) => {
  try {
    const { name, proficiency, score, experience } = req.body;
    const newSkill = {
      name: name,
      proficiency: proficiency,
      score: score,
      logo: {
        filename: req.file.originalname,
        size: req.file.size,
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      experience: experience,
    };
    const skill = new Skills(newSkill);
    const savedSkill = await skill.save();
    res.set("Content-Type", req.file.mimetype);
    res.status(201).json(savedSkill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

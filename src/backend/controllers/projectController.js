const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const postProject = async (req, res) => {
  console.log("porjects", req.body);
  const body = {
    name: req.body.name,
    image: {
      filename: req.file.originalname,
      size: req.file.size,
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
    description: req.body.description,
    git: req.body.git,
    hosted: req.body.hosted,
  };
  try {
    const newProject = new Project(body);
    const savedProject = await newProject.save(newProject);
    res.set("Content-Type", req.file.mimetype);
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProjects, postProject };

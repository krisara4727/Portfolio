const express = require("express");
const {
  getProjects,
  postProject,
} = require("../controllers/projectController");
const projectRouter = express.Router();

const { upload } = require("../config/storage");

projectRouter.get("/", getProjects);
projectRouter.post("/", upload.single("image"), postProject);

module.exports = projectRouter;

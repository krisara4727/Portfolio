const express = require("express");
const { getFile, postFile } = require("../controllers/fileController");
const { upload } = require("../config/storage");
const fileRouter = express.Router();

fileRouter.get("/", getFile);
fileRouter.post("/", upload.single("file"), postFile);

module.exports = fileRouter;

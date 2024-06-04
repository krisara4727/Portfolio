const express = require("express");
const router = express.Router();
const skillsController = require("../controllers/skillsController");

const { upload } = require("../config/storage");

router.get("/", skillsController.getSkills);
router.post("/", upload.single("logo"), skillsController.postSkill);

module.exports = router;

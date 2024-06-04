const File = require("../models/Files");

const getFile = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postFile = async (req, res) => {
  const body = {
    file: {
      filename: req.file.originalname,
      size: req.file.size,
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  };
  try {
    const newFile = new File(body);
    const savedFile = await newFile.save();
    res.set("Content-Type", req.file.mimetype);
    res.status(201).json(savedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFile, postFile };

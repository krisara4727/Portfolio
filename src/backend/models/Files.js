const mongoose = require("mongoose");

const filesSchema = new mongoose.Schema({
  file: {
    filename: String,
    size: String,
    contentType: String,
    data: Buffer,
  },
});

module.exports = mongoose.model("File", filesSchema);

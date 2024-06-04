const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const aboutRoutes = require("./routes/about");
const fileRoutes = require("./routes/file");
const skillRoutes = require("./routes/skills");
const projectRoutes = require("./routes/project");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/about", aboutRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

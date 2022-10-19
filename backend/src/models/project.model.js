const mongoose = require("mongoose");

const Projects = mongoose.model(
    "Projects",
    new mongoose.Schema({
        title: String,
        description: String,
        repository: String,
        demo: String
    })
);
module.exports = Projects;
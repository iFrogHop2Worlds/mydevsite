const mongoose = require("mongoose");

const Article = mongoose.model(
    "Article",
    new mongoose.Schema({
        title: String,
        text_content: [String],
        image_content: [String],
        video_content: [String]
    })
);
module.exports = Article;
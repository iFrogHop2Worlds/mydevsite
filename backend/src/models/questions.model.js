const mongoose = require("mongoose");

const Questions = mongoose.model(
    "Questions",
    new mongoose.Schema({
        name: String,
        email: String,
        question: String
    })
);

module.exports = Questions;
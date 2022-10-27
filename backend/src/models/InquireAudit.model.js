const mongoose = require("mongoose");

const Inquiry_Audit = mongoose.model(
    "Inquiry_Audit",
    new mongoose.Schema({
        description: String,
        repository: String,
        domain: String
    })
);
module.exports = Inquiry_Audit;
const mongoose = require("mongoose");

const Inquiry_Consultation = mongoose.model(
    "Inquiry_Consultation",
    new mongoose.Schema({
        description: String
    })
);
module.exports = Inquiry_Consultation;
const mongoose = require("mongoose");

const Inquiry_NewProduct = mongoose.model(
    "Inquiry_NewProduct",
    new mongoose.Schema({
        description: String,
        name: String,
        budget: String
    })
);
module.exports = Inquiry_NewProduct;
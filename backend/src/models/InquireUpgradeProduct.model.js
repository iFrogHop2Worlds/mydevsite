const mongoose = require("mongoose");

const Inquiry_UpgradeProduct = mongoose.model(
    "Inquiry_UpgradeProduct",
    new mongoose.Schema({
        technologies: String,
        released: String,
        repository: String,
        description: String
    })
);
module.exports = Inquiry_UpgradeProduct;
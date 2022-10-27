const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.projects = require("./project.model");
db.articles = require("./article.model");
db.questions = require("./questions.model");
db.inquiries_audit = require("./InquireAudit.model");
db.inquiries_consultation = require("./InquireConsultation.model");
db.inquiries_newProduct = require("./InquireNewProduct.model");
db.inquiries_upgradeProduct = require("./InquireUpgradeProduct.model");


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;

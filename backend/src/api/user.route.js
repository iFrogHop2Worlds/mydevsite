const { Router } = require("express");
const { authJwt } = require("../middleware");
const user = require("./user.controller");

const router = new Router();



// user questions
router.route("/submit-question").post(user.apiSubmitQuestion);
router.route("/get-questions").get(user.apiGetQuestions);

module.exports = router;

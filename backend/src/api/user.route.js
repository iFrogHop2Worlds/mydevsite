const { Router } = require("express");
const user = require("./user.controller");

const router = new Router();

// user questions
router.route("/submit-question").post(user.apiSubmitQuestion);
router.route("/get-questions").get(user.apiGetQuestions);
router.route("/faq/delete").put(user.apiDeleteQuestion);
router.route("/faq/reply").put(user.apiReplyQuestion);


router.route("/inquiry/new").post(user.apiSubmitNewProject);
router.route("/inquiry/upgrade").post(user.apiSubmitUpgradeProject);
router.route("/inquiry/consultation").post(user.apiSubmitConsultation);
router.route("/inquiry/audit").post(user.apiSubmitAudit);

module.exports = router;

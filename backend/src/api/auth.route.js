const { Router } = require("express");
const { verifySignUp } = require("../middleware");
const auth = require("./auth.controller.js");

const router = new Router();

router.route("/signup").post([
    verifySignUp.checkDuplicateUserOrEmail,
    verifySignUp.checkRolesExisted
], auth.apiSignUp);

router.route("/signin").post(auth.apiSignIn);

module.exports = router;
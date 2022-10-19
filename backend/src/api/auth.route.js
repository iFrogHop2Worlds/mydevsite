const { Router } = require("express");
const { verifySignUp } = require("../middleware");
const authDataController = require("./auth.controller.js");

const router = new Router();

router.route("/sign-up").post([
    verifySignUp.checkDuplicateUserOrEmail,
    verifySignUp.checkRolesExisted
], authDataController.apiSignUp);

router.route("/sign-in").post(authDataController.apiSignIn);

module.exports = router;
const { Router } = require("express");
const { authJwt } = require("../middleware");
const user = require("./user.controller");

const router = new Router();

router.route("/all").get(user.apiAllAccess);
router.route("/user").get([authJwt.verifyToken], user.apiUserBoard);
router.route("/mod").get([authJwt.verifyToken, authJwt.isModerator], user.apiModeratorBoard);
router.route("/admin").get([authJwt.verifyToken, authJwt.isAdmin], user.apiAdminBoard);

module.exports = router;

const { Router } = require("express");
const ProjectDataController = require("./projectData.controller.js");

const router = new Router();

router.route("/post").post(ProjectDataController.apiAddProject)
router.route("/get").get(ProjectDataController.apiGetProject)
router.route("/all").get(ProjectDataController.apiGetAllProjects)
router.route("/update").put(ProjectDataController.apiUpdateProject)
router.route("/delete").put(ProjectDataController.apiDeleteProject)

module.exports = router;
 

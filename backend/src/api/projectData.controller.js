const projectDataDAO = require("../dao/projectDataDAO");

class ProjectDataController {

    static async apiGetProject(req, res, next) {
        let ProjectQuery
  
        req ? ProjectQuery=req : console.log("Data did not persist properly")
        try {
            ProjectQuery = await projectDataDAO.getProject(ProjectQuery)
            res.json(ProjectQuery)
        } catch (e) {
            res.status(500).json({error: e});
        }
    }  

    static async apiGetAllProjects(req, res, next) {
        let ProjectQuery
  
        req ? ProjectQuery=req : console.log("Data did not persist properly")
        try {
            ProjectQuery = await projectDataDAO.getAllProjects()
            res.json(ProjectQuery)
        } catch (e) {
            res.status(500).json({error: e});
        }
    }

    static async apiAddProject(req, res, next) {
        let Project 
        req ? Project=req : console.log("Data did not persist properly")
        try {
            await projectDataDAO.addProject(Project.body); 
        } catch (e) {
            console.log(e);
        }
    } 

    static async apiUpdateProject(req, res, next) {
        // console.log(req.body)
        let ProjectQuery
  
        req ? ProjectQuery=req : console.log("Data did not persist properly")
        try {
            ProjectQuery = await projectDataDAO.updateProject(ProjectQuery.body)
            res.json(ProjectQuery)
        } catch (e) {
            res.status(500).json({error:e})
        }
    }

    static async apiDeleteProject(req, res, next){
        console.log(req.body._id)
        try{
            await projectDataDAO.deleteProject(req.body.title)
        } catch (e){
            res.status(500).json({error:e})
        }
    }

}
module.exports = ProjectDataController
const projectDataDAO = require("../dao/projectDataDAO");

class ProjectDataController {

    static async apiGetProject(req, res, next) {
        let ProjectQuery
  
        req ? ProjectQuery=req : console.log("Data did not persist properly")
        try {
            ProjectQuery = await projectDataDAO.getProject(ProjectQuery)
            res.json(ProjectQuery)
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiAddProject(req, res, next) {
        let Project 
        req ? Project=req : console.log("Data did not persist properly")
        try {
            await projectDataDAO.addProject(Project.body); 
        } catch (err) {
            console.log(err);
        }
    } 

    static async apiUpdateProject(req, res, next) {
        try {
            await projectDataDAO.updateProject(req)
        } catch (err) {
            res.status(500).json({error:err})
        }
    }

    static async apiDeleteProject(req, res, next){
        // try{
        //     await projectDataDAO.deleteOne({product: "Fire"})
        // } catch (e){
        //     res.json({message: "still working on it"})
        // }
    }

}
module.exports = ProjectDataController
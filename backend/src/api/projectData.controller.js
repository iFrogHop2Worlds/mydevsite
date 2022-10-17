const projectDataDAO = require("../dao/projectDataDAO");

class ProjectDataController {

    static async apiGetProject(req, res, next) {
        let result
        try {
            result = await projectDataDAO.getProject()
            res.json(result)
        } catch (err) {
            res.status(500).json({error: err});
        }
    }   apiGetAllAllureArticles

 

    static async apiAddProject(req, res, next) {
        let result 
        console.log(req.body)
        req ? result=req : console.log("Data did not persist properly")
        try {
            await projectDataDAO.addProject(result.body); 
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
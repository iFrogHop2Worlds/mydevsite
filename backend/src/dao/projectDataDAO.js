/* eslint-disable no-undef */


let Projects
let Articles
let DevSite
class ProjectDataDAO {

    static async injectDB(conn) {
     
        try{
            DevSite = await conn.db("devsite");
            Projects = await conn.db("devsite").collection("projects");
            Articles = await conn.db("devsite").collection("articles");
            console.log("connection to db established")
        } catch (e) {
            console.error(`unable to establish a connection handle in ProjectDAO: ${e}`)
        }
    }

    static async getProject(project) {
        try {
            let q = await Projects
            .find({title: project.query.title})
            .project({})
            .toArray();
         
            return q
        } catch (err) {
            console.log(err);
        }
    }   

    static async getAllProjects() {
        try {
            let q = await Projects
            .find({})
            .project({})
            .toArray();
         
            return q
        } catch (err) {
            console.log(err);
        }
    }   
   
    static async addProject(project) {
        try {
            if(project == undefined)return
            await Projects.insertOne(project); 
    } catch (err) {
        console.log(err);
        console.log("in DAO");
    }
    }
  
    static async updateProject(req) {
        try {
            await Projects.updateOne(
                { "title" : req.title },
                { $set: { "description" : req.description?req.description:"none" } }
            ); 
            await Projects.updateOne(
                { "title" : req.title },
                { $set: { "repository" : req.repository?req.repository:"none" } }   
            ); 
            await Projects.updateOne(
                { "title" : req.title },
                { $set: { "demo" : req.demo?req.demo:"none" } }  
            ); 
        } catch (err) {
           console.log(err)
        }
    }

    static async deleteProject(req, res, next){
        try{
            let result = await Projects.deleteOne({ "title" : req })
            console.log(result)
        } catch (e){
            res.json({message: "error"} + e)
        }
    }


}
module.exports = ProjectDataDAO
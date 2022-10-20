

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
  
    static async updateProject(updates) {
        try {
            await Projects.update(
                {},
                {$set: {currency: updates}}, //just testing
            )
        } catch (err) {
           console.log(err)
        }
    }

    static async apiDeleteProject(req, res, next){
        try{
            await Projects.deleteOne({product: "Fire"})
        } catch (e){
            res.json({message: "still working on it"})
        }
    }




}
module.exports = ProjectDataDAO
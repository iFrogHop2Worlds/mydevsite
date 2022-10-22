let DB ;
let questions;
   
class userDataDAO {

    static async injectDB(conn) {
     
        try{
            DB = await conn.db("devsite");
            questions = await conn.db("test").collection("questions");
           
            console.log("connection to userDAO db established")
        } catch (e) {
            console.error(`unable to establish a connection handle in userDAO: ${e}`)
        }
    }

    static async SubmitQuestion(question) {
        try {
            if(question == undefined)return;
            await questions.insertOne(question)
        } catch (err) {
            console.log(err);
        }
    } 

    static async GetQuestions(req, res) {
        try {
            let q = await questions
            .find({})
            .project({})
            .toArray();
         
            return q
        } catch (err) {
            console.log(err);
        }
    }  

};
module.exports = userDataDAO;
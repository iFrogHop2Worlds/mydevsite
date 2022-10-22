const userDataDAO = require("../dao/userDataDAO");
const  ObjectID = require('mongodb').ObjectId;
class userDataController {

    static async apiSubmitQuestion(req, res, next) {
        let X  
        req ? X = req : console.log("Data did not persist properly")
        console.log(X.body)
        try {
            await userDataDAO.SubmitQuestion(X.body);
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiGetQuestions(req, res, next) {
        let X  
        req ? X = req : console.log("Data did not persist properly")
        console.log(X.body)
        try {
            X = await userDataDAO.GetQuestions(X.body);
            res.json(X);
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiDeleteQuestion(req, res, next) {
        let X  
        req ? X = req : console.log("Data did not persist properly")
        console.log(X.body)
        try {
            X = await userDataDAO.DeleteQuestions(X.body);
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiReplyQuestion(req, res, next) {
        let X  
        req ? X = req : console.log("Data did not persist properly")
        console.log(X.body)
        try {
            X = await userDataDAO.ReplyQuestion(ObjectID(X.body.id), X.body.response);
            res.json(X)
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

}
module.exports = userDataController


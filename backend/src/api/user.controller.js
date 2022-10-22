const userDataDAO = require("../dao/userDataDAO");

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

}
module.exports = userDataController


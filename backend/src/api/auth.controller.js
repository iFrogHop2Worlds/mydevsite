const authDataDAO = require("../dao/authDataDAO");

class authDataController {

    static async apiSignUp(req, res, next) {
        let credentials
  
        req ? credentials=req : console.log("Data did not persist properly")
        try {
            credentials = await authDataDAO.signup(credentials)
            res.json(credentials)
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiSignIn(req, res, next) {
        let credentials
  
        req ? credentials=req : console.log("Data did not persist properly")
        try {
            credentials = await authDataDAO.signin(credentials)
            res.json(credentials)
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

}
module.exports = authDataController
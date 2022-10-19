// const userDataDAO = require("../dao/userDataDAO");

class userDataController {

    static async apiAllAccess(req, res, next) {
        let X 
        req ? X = req : console.log("Data did not persist properly")
        try {
            res.status(200).send("Public Content.");
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiUserBoard(req, res, next) {
        let X 
        req ? X = req : console.log("Data did not persist properly")
        try {
            res.status(200).send("User Content.");
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiAdminBoard(req, res, next) {
        let X 
        req ? X = req : console.log("Data did not persist properly")
        try {
            res.status(200).send("Admin Content.");
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

    static async apiModeratorBoard(req, res, next) {
        let X  
        req ? X = req : console.log("Data did not persist properly")
        try {
            res.status(200).send("Public Content.");
        } catch (err) {
            res.status(500).json({error: err});
        }
    } 

}
module.exports = userDataController


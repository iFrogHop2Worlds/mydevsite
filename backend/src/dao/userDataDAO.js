let User; // set db instance
class userDataDAO {

    static async signup(credentials) {
        try {
            let q = await User
            .find({username: credentials.query.username})
            .project({})
            .toArray();
         
            return q
        } catch (err) {
            console.log(err);
        }
    }   

    static async getuser(credentials) {
        try {
            let q = await User
            .find({username: credentials.query.username})
            .project({})
            .toArray();
         
            return q
        } catch (err) {
            console.log(err);
        }
    }   

};
module.exports = userDataDAO;
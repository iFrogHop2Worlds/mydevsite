require('dotenv').config()
const app = require("./src/server");
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 8181;
const ProjectDataDAO = require('./src/dao/projectDataDAO')
const userDataDAO = require("./src/dao/userDataDAO")
 
MongoClient.connect(
        process.env.DEVSITE_DB_URI,
        {
            maxPoolSize: 100, 
            useNewUrlParser: true, 
            writeConcern: {wtimeout:3500}
        },
    )
    .catch( err => {
 
        console.error(err.stack);

        process.exit(1);
    })
    .then(async client => {

        await ProjectDataDAO.injectDB(client);
        await userDataDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })

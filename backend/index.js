const app = require("./server");
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 8181;

// let GlamourCrawler = require("./services/glamour_crawler/m");
// let AllureCrawler = require('./services/allure_crawler/m')
 
MongoClient.connect(
        process.env.MDECK_DB_URI,
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

        // await BeautyDAO.injectDB(client);


        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })
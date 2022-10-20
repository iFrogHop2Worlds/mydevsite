require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const projectData = require('./api/projectData.route');
const auth = require("./api/auth.route");
const user = require("./api/user.route");
// const articlesData = require("./api/articlesData.route");

const db = require("./models");
const Role = db.role;

const app = express();
process.env.NODE_ENV !== 'prod' && app.use(morgan("dev"));
app.use(bodyParser.json({limit: '15mb'}));
app.use(bodyParser.urlencoded({limit: '15mb', extended: true}));
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '"x-access-token, Origin, Content-Type, Accept, Authorization, Content-Length, X-Requested-With');

  if ('OPTIONS' === req.method) {
    res.send(200);
  }
  else {
    next();
  }
});
// app.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

const initial = () => {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

try {
    mongoose.connect(
        process.env.DEVSITE_DB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose is connected"),
        )    
} catch (e) {
    console.log("could not connect");
}

try {initial();} catch (error) {console.log("init function failed: " + error);}
  
// const dbConn = mongoose.connection;


app.use("/projects", projectData);
// app.use("/articles", articlesData);
app.use("/auth-api", auth);
app.use("/user-api", user);
app.use("/test-api", user);


app.use("*", (req, res) => res.status(404).json({ error: "not found" }));




module.exports = app;
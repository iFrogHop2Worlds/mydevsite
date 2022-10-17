require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const projectData = require('./api/projectData.route');
// const articlesData = require("./api/articlesData.route");



const app = express();


process.env.NODE_ENV !== 'prod' && app.use(morgan("dev"));
app.use(bodyParser.json({limit: '15mb'}));
app.use(bodyParser.urlencoded({limit: '15mb', extended: true}));
app.use(cors());

// register API routes
app.use("/projects", projectData);
// app.use("/articles", articlesData);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
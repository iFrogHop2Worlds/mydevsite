const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const projectsData = require("./api/projectsData.route");
// const articlesData = require("./api/articlesData.route");



const app = express();

app.use(cors());
process.env.NODE_ENV !== 'prod' && app.use(morgan("dev"));
app.use(bodyParser.json({limit: '15mb'}));
app.use(bodyParser.urlencoded({limit: '15mb', extended: true}));

// register API routes
app.use("/projects", projectsData);
// app.use("/articles", articlesData);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

module.exports = app;
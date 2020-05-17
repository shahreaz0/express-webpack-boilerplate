//modules
const path = require("path");
const express = require("express");
require("dotenv").config();
//Router()
const homeRouter = require("./routes/home");

//express config
const app = express();
//set
app.set("views", path.join("views"));
app.set("view engine", "ejs");
//use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

//routes
app.use("/", homeRouter);

//exports
module.exports = app;

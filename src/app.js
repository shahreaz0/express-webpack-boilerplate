//modules
const path = require("path");
const express = require("express");
require("dotenv").config();
console.log(process.env.MY_VAR);
//Router()
const homeRouter = require("./routes/home");

//express config
const app = express();
//set
app.set("views", path.join(__dirname, "./../views"));
app.set("view engine", "ejs");
//use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./../public")));

//routes
app.use("/", homeRouter);

//exports
module.exports = app;

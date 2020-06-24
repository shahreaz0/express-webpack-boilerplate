// modules
const path = require("path");
const express = require("express");
const chalk = require("chalk");
require("dotenv").config();

// routes
const homeRoutes = require("./routes/home");

// express config
const app = express();
app.set("views", path.join("views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

// routes config
app.use("/", homeRoutes);

// server
const port = process.env.PORT || "3000";
app.listen(port, () => {
	console.log(chalk.blue("====================="));
	console.log(chalk.bold(`http://localhost:${chalk.bold.red(port)}`));
	console.log(chalk.blue("====================="));
});

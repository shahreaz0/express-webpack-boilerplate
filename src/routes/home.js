//modules
const router = require("express").Router();

// GET --> /
router.get("/", function (req, res, next) {
	res.render("home", { title: "Express" });
});

//exports
module.exports = router;

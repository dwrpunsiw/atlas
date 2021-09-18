const express = require("express");

const router = express.Router();

// controllers
const { getIndex } = require("../controllers/HomeController.js");

router.route("/").get(getIndex);

module.exports = router;

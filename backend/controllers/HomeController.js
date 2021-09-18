const asyncHandler = require("express-async-handler");

// @desc: Initialization atlas web service
// @route: GET /api/
// @desc: public
const getIndex = asyncHandler(async (req, res) => {
  res.json({
    name: "Atlas ITB API",
    desc: "Atletik Ganesha ITB Official Web Service",
    author: "ATLAS TEAM",
    version: "1.0.0",
    contact: "atletikganesha@itb.ac.id",
  });
});

module.exports = { getIndex };

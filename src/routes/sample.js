//* Route > /
const express = require("express");
const router = express.Router();

// Controllers
const sampleController = require("../controllers/sample");

// GET : /
router.get("/", sampleController.sample);

//* Export
module.exports = router;
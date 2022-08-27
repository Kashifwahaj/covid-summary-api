import express = require("express");
import CovidController = require("../controllers/covidController");
const router = express.Router();

router.get("/vaccine-summary",CovidController.getVaccineSummary);

module.exports = router;
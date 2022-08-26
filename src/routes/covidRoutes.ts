const express = require('express');
const { getVaccineSummary} = require('../controllers/covidController');
const router = express.Router();

router.get('/vaccine-summary',getVaccineSummary);

module.exports = router;
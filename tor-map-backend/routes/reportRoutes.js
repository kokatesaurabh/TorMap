const express = require('express');
const router = express.Router();
const { addReport, getReports } = require('../controllers/reportController');

router.post('/add', addReport);
router.get('/all', getReports);

module.exports = router;

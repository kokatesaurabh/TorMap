const express = require('express');
const router = express.Router();
const { addScan, getScans } = require('../controllers/scanController');

router.post('/add', addScan);
router.get('/all', getScans);

module.exports = router;

const express = require('express');
const router = express.Router();
const { addTraffic, getTraffic } = require('../controllers/trafficController');

router.post('/add', addTraffic);
router.get('/all', getTraffic);

module.exports = router;

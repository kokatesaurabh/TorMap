const express = require('express');
const router = express.Router();

// Import de-anonymization service or logic
const { deAnonymizeSite } = require('../services/deAnonymizationService');

// Route to handle de-anonymization requests
router.post('/start', async (req, res) => {
  const { url } = req.body;
  try {
    // Call your de-anonymization logic or service
    const result = await deAnonymizeSite(url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to de-anonymize the site' });
  }
});

module.exports = router;

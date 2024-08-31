const Scan = require('../models/Scan');

// Add scan results
exports.addScan = async (req, res) => {
  const { results } = req.body;
  try {
    const scan = new Scan({ results });
    await scan.save();
    res.status(201).json({ message: 'Scan results added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get scan results
exports.getScans = async (req, res) => {
  try {
    const scans = await Scan.find();
    res.json(scans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

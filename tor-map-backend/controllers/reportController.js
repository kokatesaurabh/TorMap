const Report = require('../models/Report');

// Add report
exports.addReport = async (req, res) => {
  const { content } = req.body;
  try {
    const report = new Report({ content });
    await report.save();
    res.status(201).json({ message: 'Report added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get reports
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

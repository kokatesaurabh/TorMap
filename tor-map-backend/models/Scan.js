const mongoose = require('mongoose');

const ScanSchema = new mongoose.Schema({
  results: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Scan', ScanSchema);

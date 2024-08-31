const mongoose = require('mongoose');

const TrafficSchema = new mongoose.Schema({
  data: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Traffic', TrafficSchema);

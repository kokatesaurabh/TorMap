const Traffic = require('../models/Traffic');

// Add traffic data
exports.addTraffic = async (req, res) => {
  const { data } = req.body;
  try {
    const traffic = new Traffic({ data });
    await traffic.save();
    res.status(201).json({ message: 'Traffic data added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get traffic data
exports.getTraffic = async (req, res) => {
  try {
    const trafficData = await Traffic.find();
    res.json(trafficData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const { emitEvent } = require('../config/socket');

exports.getTrafficData = async (req, res) => {
  try {
    const trafficData = await Traffic.find();
    emitEvent('trafficData', trafficData); // Emit real-time traffic data to connected clients
    res.json(trafficData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch traffic data' });
  }
};

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URL; // Ensure this matches your .env
    if (!uri) {
      throw new Error('MONGODB_URL is not defined');
    }
    await mongoose.connect(uri); // Remove deprecated options
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };

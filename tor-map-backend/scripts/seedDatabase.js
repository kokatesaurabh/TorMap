const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');

connectDB();

const seedUsers = async () => {
  try {
    await User.deleteMany();
    const users = [
      { name: 'Admin', email: 'admin@example.com', password: 'password' },
    ];
    await User.insertMany(users);
    console.log('Users seeded');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

seedUsers();

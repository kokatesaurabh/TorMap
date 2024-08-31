const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      // Create a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Send the token as response
      res.json({ token });
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Server error' });
    }
  });
  

  // Register route
router.post('/register', async (req, res) => {
    const { name, email, username, password } = req.body;
  
    try {
      // Create a new user
      const newUser = new User({ name, email, username, password });
      await newUser.save();
  
      res.json({ message: 'User created' });
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  module.exports = router;
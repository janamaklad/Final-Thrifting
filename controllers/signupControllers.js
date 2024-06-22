const express = require('express');
const bodyParser = require('body-parser'); // Optional, for Express versions prior to 4.16.0
const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json()); // For Express 4.16.0 and later

const registrationProcess = async (req, res) => {
  try {
    const { fname, lname, username, email, num, password, confirmPassword } = req.body;
console.log(req.body);
    // Validate all fields
    if (!fname || !lname || !username || !email || !num || !password || !confirmPassword) {
      console.log("Validation failed: All fields are required.");
      return res.status(400).json({
        success: false,
        errors: {
          form: "All fields are required."
        }
      });
    }

    if (password !== confirmPassword) {
      console.log("Validation failed: Passwords do not match.");
      return res.status(400).json({
        success: false,
        errors: {
          confirmPassword: "Passwords do not match."
        }
      });
    }

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      console.log("Validation failed: Username or email already exists.");
      return res.status(400).json({
        success: false,
        errors: {
          username: "Username or email already exists."
        }
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      fname: fname,
      lname: lname,
      username,
      email,
      num: num,
      password: hashedPassword,
    });

    // Save new user to database
    await newUser.save();

    // Respond with success
    console.log(`User ${username} registered successfully.`);
    res.json({
      success: true,
      message: "Registration successful!"
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

module.exports = {
  registrationProcess,
};
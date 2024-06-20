const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

const registrationProcess = async (req, res) => {
  try {
    const { fname, lname, username, email, num, password, confirmPassword } = req.body;

    // Validate all fields
    if (!fname || !lname || !username || !email || !num || !password || !confirmPassword) {
      return res.render("signup", {
        currentPage: "signup",
        error: "All fields are required.",
        user: null,
      });
    }

    if (password !== confirmPassword) {
      return res.render("signup", {
        currentPage: "signup",
        error: "Passwords do not match.",
        user: null,
      });
    }

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.render("signup", {
        currentPage: "signup",
        error: "Username or email already exists.",
        user: null,
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName: fname,
      lastName: lname,
      username,
      email,
      phoneNumber: num,
      password: hashedPassword,
    });

    // Save new user to database
    await newUser.save();

    // Redirect or respond as necessary
    req.session.user = newUser; // Example: Using sessions
    res.redirect("/"); // Redirect to homepage after successful signup
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  registrationProcess,
};

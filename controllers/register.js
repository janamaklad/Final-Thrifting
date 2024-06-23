import User from "../models/user.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

export const signup_post = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ err: "All fields are required." });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ err: "Please enter a valid email address." });
    }

    const egyptianPhoneNumberRegex = /^(010|011|012|015)[0-9]{8}$/;
    if (!egyptianPhoneNumberRegex.test(phoneNumber)) {
      return res
        .status(400)
        .json({ err: "Please enter a valid Egyptian phone number." });
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      })
    ) {
      return res.status(400).json({
        err: "Password must be at least 8 characters long and contain a combination of uppercase, lowercase, and numeric characters.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        err: "Passwords do not match. Please re-enter your passwords.",
      });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ err: "Username already exists." });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ err: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await newUser.save();

    // Respond with success
    return res.json({
      message: "Registration successful!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      err: "Internal Server Error",
    });
  }
};

export const login_post = async (req, res) => {
  const { username, password } = req.body;


  try {
    const founduser = await User.findOne({ username });

    if (!founduser || !bcrypt.compareSync(password, founduser.password))
      return res.status(401).json({ err: "Wrong username or password" });

    const token = jwt.sign({ user: founduser }, process.env.JWT_SECRET_PHRASE, {
      expiresIn: 3 * 24 * 60 * 60, //3 days
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
    });

    res.status(200).json({ user: founduser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};

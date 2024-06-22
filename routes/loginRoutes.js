
// app.js or server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

const loginController = require("./controllers/loginController");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: false,
}));

// Connect to MongoDB (adjust URI and options as needed)
mongoose.connect("mongodb://localhost:27017/thrifting.users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// Routes
app.post("/login", loginController.loginProcess);

module.exports = app;

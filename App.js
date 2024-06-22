const mongoose=require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes/routes"); // Assuming this is your routes file
const app = express();

// Middleware setup
app.use(express.static("public", { maxAge: "7d" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

require('dotenv').config();

  // Session setup
  app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

  // Custom middleware
  app.use(function(req, res, next) {
  console.log('Middleware function');
  next(); // Pass control to the next middleware function
});

// Setup routes using your routes module
routes.setupRoutes(app);

mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
  console.log('Server running on http://localhost:${PORT}');
});
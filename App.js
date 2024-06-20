const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes/routes"); // Import your routes setup function

const app = express();

app.use(express.static("public", { maxAge: "7d" }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();


// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);


// Setup routes
routes.setupRoutes(app); // Call setupRoutes and pass app as an argument

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

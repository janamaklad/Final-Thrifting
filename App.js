const mongoose=require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes/routes");
// Assuming this is your routes file
const app = express();

// Middleware setup
app.use(express.static("public", { maxAge: "7d" }));
app.use(bodyParser.urlencoded({ extended: true }));
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

// POST endpoint for handling login
app.post('/login', async (req, res) => {
  try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) {
          return res.status(400).json({ success: false, error: 'User does not exist.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          return res.status(400).json({ success: false, error: 'Invalid username or password.' });
      }

      // Example assuming isAdmin is a field in your user model
      const isAdmin = user.isAdmin; // Adjust according to your user model

      // Return success and isAdmin flag
      res.json({ success: true, isAdmin: isAdmin });
  } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
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
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


 /*app.post("/register", (req,res)=>{
  try{
  const { username, password }= req.body;
  const findUser = user.find((data) => email == data.email);
  if (findUser){
  res.status(400).send("Wrong email or password");
  }
  const hashedPassword = await bcrypt.hash(password,10);
  user.push({username, password: hashedPassword });
  res.status(201).send("success");
  } catch (err){
  res.status(500).send({message: err.message})
  }
  })*/
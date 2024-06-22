const mongoose=require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes/routes"); 
const productRoutes = require('./routes/productRoutes');
const app = express();

mongoose.connect('mongodb://localhost:27017/yourdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use('/', productRoutes);
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
app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
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
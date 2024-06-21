const express = require("express");
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(express.static("public", { maxAge: "7d" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
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

// Setup routes 
routes.setupRoutes(app);
=======
app.use('./controllers/products', productRoutes);
>>>>>>> ea6a96a3a4f585cc137640f4eeb7b9783c899154

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});

import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
/*import user from "./models/user.js"*/
import product from "./models/product.js"


dotenv.config();

const app = express();


app.use(express.static("public")); // to read static files (css ,js ,img)
app.use(express.json()); // to read req.body
app.use(express.urlencoded({ extended: true })); // to read req.body
app.use(cookieParser());
app.set("view engine", "ejs"); // to set view engine to ejs



// Define route to fetch users and render view
app.get("/", async (req, res) => {
  try {
     const users= await user.find(); // Fetch all users from the database
    res.render("viewusers",{users}); // Render the viewusers template with users data
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

// Define route to fetch products and render view
app.get("/", async (req, res) => {
  try {
    const products = await product.find(); // Fetch all products from the database (assuming Product is your model)
    res.render("products", { products }); // Render the viewproducts template with products data
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
});

app.use(routes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.listen(PORT, async () => {
   
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
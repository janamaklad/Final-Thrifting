import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import adminAuth from "./middleware/adminAuth.js";

dotenv.config();

const app = express();

app.use(express.static("public")); // to read static files (css ,js ,img)
app.use(express.json()); // to read req.body
app.use(express.urlencoded({ extended: true })); // to read req.body
app.use(cookieParser());
app.set("view engine", "ejs"); // to set view engine to ejs

app.use("/admin", adminAuth, adminRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);

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

import express from "express";
import {
  createProduct_post,
  getProducts_get,
  getProductsById_get,
  updateProduct_put,
  deleteProduct_delete,
} from "../controllers/products.js";

const router = express.Router();

// Routes for products
router.post("/products", createProduct_post);
router.get("/products", getProducts_get);
router.get("/products/:id", getProductsById_get);
router.put("/products/:id", updateProduct_put);
router.delete("/products/:id", deleteProduct_delete);

export default router;
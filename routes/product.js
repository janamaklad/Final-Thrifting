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
router.post("/", createProduct_post);
router.get("/", getProducts_get);
router.get("/:id", getProductsById_get);
router.put("/:id", updateProduct_put);
router.delete("/:id", deleteProduct_delete);

export default router;

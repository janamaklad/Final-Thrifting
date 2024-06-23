import express from "express";
import {
  createUser_post,
  getUsers_get,
  subCategory_get,
  home_get,
  checkout_get,
  cart_get,
  updateUser_put,
  profile_get,
  sell_get,
  deleteUser_delete,
} from "../controllers/user.js";

import { createProduct_post } from "../controllers/products.js";

const router = express.Router();

// Routes for users
router.get("/:id", home_get);
router.get("/:id/cart", cart_get);
router.get("/:id/profile", profile_get);
router.get("/:id/sell", sell_get);
router.post("/:id/sell", createProduct_post);

router.get("/:id/checkout", checkout_get);
router.get("/:id/category/:category/:subcategory", subCategory_get);

router.get("/", getUsers_get);
router.post("/", createUser_post);
router.put("/:id", updateUser_put);
router.delete("/:id", deleteUser_delete);

export default router;

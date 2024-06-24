import express from "express";
import {
  createUser_post,
  getUsers_get,
  subCategory_get,
  home_get,
  checkout_get,
  cart_get,
  
  profile_get,
  sell_get,
  deleteUser_delete
  
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

router.delete("/:id", deleteUser_delete);

router.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, username, email, phoneNumber } = req.body;
  try {
    const response = await fetch(`/user/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const user = await response.json();
    populateEditForm(user); // Call function to populate edit form
  } catch (error) {
    console.error('Error fetching user:', error.message);
    alert('Failed to fetch user data');
  }
});

export default router;

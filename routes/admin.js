import express from "express";
import User from "../models/user.js";
import Product from "../models/product.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.render("admin/home", {
    title: "Second Chance",
    nav: false,
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/user", async (req, res) => {
  res.render("admin/users", {
    title: "Admin Dashboard",
    nav: "user",
    users: await User.find(),
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/product", async (req, res) => {
  res.render("admin/products", {
    title: "Products",
    nav: "product",
    products: await Product.find(),
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/AdminWomen", async (req, res) => {
  res.render("AdminWomen", {
    title: "Women Category",
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/AdminMen", async (req, res) => {
  res.render("AdminMen", {
    title: "Men Category",
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/AdminBoys", async (req, res) => {
  res.render("AdminBoys", {
    title: "Boys Category",
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/AdminGirls", async (req, res) => {
  res.render("AdminGirls", {
    title: "Girls Category",
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/AdminBaby", async (req, res) => {
  res.render("AdminBaby", {
    title: "Baby Category",
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/AdminHome", async (req, res) => {
  res.render("AdminHome", {
    title: "Home Category",
    user: await User.findById(req.params.id),
  });
});

export default router;

import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.render("admin", {
    title: "Second Chance",
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/dashboard", async (req, res) => {
  res.render("dashboard", {
    title: "Admin Dashboard",
    user: await User.findById(req.params.id),
  });
});

router.get("/:id/sell", async (req, res) => {
  res.render("Sell", {
    title: "Sell",
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
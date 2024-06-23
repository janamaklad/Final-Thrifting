import registerRoutes from "./register.js";
import adminRoutes from "./admin.js";
import productRoutes from "./product.js";
import express from "express";
import adminAuth from "../middleware/adminAuth.js";
const router = express.Router();

router.use("/", registerRoutes);
router.use("/admin", adminAuth, adminRoutes);
  
router.get("/", (req, res) => {
  res.render("Thrifting", { title: "Second Chance" });
});
router.get("/admin", (req, res) => {
  res.render("/admin", { title: "Second Chance" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Registration" });
});

router.get("/profile", (req, res) => {
  res.render("profile", { title: "Profile" });
});

router.get("/cart", (req, res) => {
  res.render("cart", { title: "Cart" });
});

router.get("/favorites", (req, res) => {
  res.render("favorites", { title: "Favorites" });
});

router.get("/search", (req, res) => {
  res.render("search", { title: "Search for Products" });
});

router.get("/aboutus", (req, res) => {
  res.render("aboutus", { title: "About Us" });
});

router.get("/categories", (req, res) => {
  res.render("categories", { title: "Categories" });
});

router.get("/addOrder", (req, res) => {
  res.render("addOrder", { title: "Add Order" });
});
router.get("/adminhomeproducts", (req, res) => {
  res.render("admin home products", { title: "Home Products" });
});

router.get("/Admingirlproducts", (req, res) => {
  res.render("Admingirlproducts", { title: "Girls Products" });
});

router.get("/AdminMenproducts", (req, res) => {
  res.render("/AdminMenproducts", { title: "Men Products" });
});
router.get("/AdminSales", (req, res) => {
  res.render("/AdminSales", { title: "View Sales Dashboard" });
});
router.get("/Adminwomenproducts", (req, res) => {
  res.render("Adminwomenproducts", { title: "Women Products" });
});
router.get("/babyproducts", (req, res) => {
  res.render("babyproducts", { title: "Baby Products" });
});
router.get("/baby", (req, res) => {
  res.render("baby", { title: "Baby Category" });
});
router.get("/boys", (req, res) => {
  res.render("boys", { title: "Boys Category" });
});
router.get("/boysproducts", (req, res) => {
  res.render("boysproducts", { title: "Boy Products" });
});

router.get("/checkout", (req, res) => {
  res.render("checkout", { title: "checkout Page" });
});
router.get("/contactus", (req, res) => {
  res.render("contactus", { title: "Contact US" });
});

router.get("/details", (req, res) => {
  res.render("details", { title: "My Details" });
});
router.get("/editorder", (req, res) => {
  res.render("editorder", { title: "Edit Orders" });
});

router.get("/filter", (req, res) => {
  res.render("filter", { title: "filter" });
});
router.get("/girlproducts", (req, res) => {
  res.render("girlproducts", { title: "girls Products" });
});
router.get("/girls", (req, res) => {
  res.render("girls", { title: "Girls Category" });
});
router.get("/gsubcategory1", (req, res) => {
  res.render("gsubcategory1", { title: "Top Wear Products" });
});
router.get("/homeproducts", (req, res) => {
  res.render("homeproducts", { title: "Home Products" });
});
router.get("/home", (req, res) => {
  res.render("home", { title: "Home Category" });
});
router.get("/menproducts", (req, res) => {
  res.render("menproducts", { title: "Men Products" });
});

router.get("/removeorder", (req, res) => {
  res.render("removeorder", { title: "Remove Orders" });
});
router.get("/removeusers", (req, res) => {
  res.render("removeusers", { title: "Remove Users" });
});

router.get("/submitbutton", (req, res) => {
  res.render("submitbutton", { title: "Display Message" });
});
router.get("/viewOrders", (req, res) => {
  res.render("viewOrders", { title: "View Orders" });
});
router.get("/viewusers", (req, res) => {
  res.render("viewusers", { title: "View Users" });
});
router.get("/visa", (req, res) => {
  res.render("visa", { title: "Document" });
});
router.get("/womanproducts", (req, res) => {
  res.render("womanproducts", { title: "Women Products" });
});
router.get("/women", (req, res) => {
  res.render("women", { title: "Women Category" });
});

export default router;


import registerRoutes from "./register.js";
import express from "express";
const router = express.Router();

router.use("/", registerRoutes);

  
router.get("/", (req, res) => {
  res.render("index", { title: "Second Chance" });
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

export default router;

// export const setupRoutes = (app) => {

//   app.get("/addOrder", (req, res) => {
//     res.render("addOrder", { title: "Add Order" });
//   });
//   app.get("/adminhomeproducts", (req, res) => {
//     res.render("admin home products", { title: "Home Products" });
//   });

//   app.get("/Admingirlproducts", (req, res) => {
//     res.render("Admingirlproducts", { title: "Girls Products" });
//   });

//   app.get("/AdminMenproducts", (req, res) => {
//     res.render("/AdminMenproducts", { title: "Men Products" });
//   });
//   app.get("/AdminSales", (req, res) => {
//     res.render("/AdminSales", { title: "View Sales Dashboard" });
//   });
//   app.get("/Adminwomenproducts", (req, res) => {
//     res.render("Adminwomenproducts", { title: "Women Products" });
//   });
//   app.get("/babyproducts", (req, res) => {
//     res.render("babyproducts", { title: "Baby Products" });
//   });
//   app.get("/baby", (req, res) => {
//     res.render("baby", { title: "Baby Category" });
//   });
//   app.get("/boys", (req, res) => {
//     res.render("boys", { title: "Boys Category" });
//   });
//   app.get("/boysproducts", (req, res) => {
//     res.render("boysproducts", { title: "Boy Products" });
//   });

//   app.get("/checkout", (req, res) => {
//     res.render("checkout", { title: "checkout Page" });
//   });
//   app.get("/contactus", (req, res) => {
//     res.render("contactus", { title: "Contact US" });
//   });

//   app.get("/details", (req, res) => {
//     res.render("details", { title: "My Details" });
//   });
//   app.get("/editorder", (req, res) => {
//     res.render("editorder", { title: "Edit Orders" });
//   });

//   app.get("/filter", (req, res) => {
//     res.render("filter", { title: "filter" });
//   });
//   app.get("/girlproducts", (req, res) => {
//     res.render("girlproducts", { title: "girls Products" });
//   });
//   app.get("/girls", (req, res) => {
//     res.render("girls", { title: "Girls Category" });
//   });
//   app.get("/gsubcategory1", (req, res) => {
//     res.render("gsubcategory1", { title: "Top Wear Products" });
//   });
//   app.get("/homeproducts", (req, res) => {
//     res.render("homeproducts", { title: "Home Products" });
//   });
//   app.get("/home", (req, res) => {
//     res.render("home", { title: "Home Category" });
//   });
//   app.get("/menproducts", (req, res) => {
//     res.render("menproducts", { title: "Men Products" });
//   });

//   app.get("/removeorder", (req, res) => {
//     res.render("removeorder", { title: "Remove Orders" });
//   });
//   app.get("/removeusers", (req, res) => {
//     res.render("removeusers", { title: "Remove Users" });
//   });
  
//   app.get("/submitbutton", (req, res) => {
//     res.render("submitbutton", { title: "Display Message" });
//   });
//   app.get("/viewOrders", (req, res) => {
//     res.render("viewOrders", { title: "View Orders" });
//   });
//   app.get("/viewusers", (req, res) => {
//     res.render("viewusers", { title: "View Users" });
//   });
//   app.get("/visa", (req, res) => {
//     res.render("visa", { title: "Document" });
//   });
//   app.get("/womanproducts", (req, res) => {
//     res.render("womanproducts", { title: "Women Products" });
//   });
//   app.get("/women", (req, res) => {
//     res.render("women", { title: "Women Category" });
//   });

//   app.use("/", productRoutes);
// };

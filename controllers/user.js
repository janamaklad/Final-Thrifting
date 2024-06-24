import User from "../models/user.js";
import Product from "../models/product.js"

const createUser_post = async (req, res) => {
  const { firstName, lastName, username, email, phoneNumber, password, role } =
    req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password,
      role,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers_get = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const home_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.render("user/shop", {
      title: "shop",
      user: await User.findById(req.params.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const subCategory_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const category = req.params.category;
    const subCategory = req.params.subcategory;


    if (!user) return res.status(404).json({ message: "User not found" });

    // Assuming Product is your Mongoose model for products
    const products = await Product.find({ category, subCategory });

    console.log(products)

    res.render("user/subCategory", {
      title: "SubCategory",
      products,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const cart_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.render("user/cart", {
      title: "cart",
      user: await User.findById(req.params.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const profile_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.render("user/profile", {
      title: "profile",
      user: await User.findById(req.params.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const checkout_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.render("user/checkout", {
      title: "checkout",
      user: await User.findById(req.params.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sell_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.render("user/sell", {
      title: "sell",
      user: await User.findById(req.params.id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser_put = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, username, email, phoneNumber, password, role } =
    req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, username, email, phoneNumber, password, role },
      { new: true, runValidators: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser_delete = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export {
  createUser_post,
  getUsers_get,
  home_get,
  updateUser_put,
  cart_get,
  subCategory_get,
  profile_get,
  checkout_get,
  sell_get,
  deleteUser_delete,
};

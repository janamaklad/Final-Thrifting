import Product from "../models/product.js";
import User from "../models/user.js";

const createProduct_post = async (req, res) => {
  if (!req.body.user)   req.body.user = await User.findById(req.params.id);
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error); 
  }
};

const getProducts_get = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductsById_get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct_put = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "category",
    "subCategory",
    "size",
    "status",
    "brand",
    "price",
    "details",
    "images",
    "user",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }

    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteProduct_delete = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  createProduct_post,
  getProducts_get,
  getProductsById_get,
  updateProduct_put,
  deleteProduct_delete,
};

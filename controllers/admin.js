

import Product from "../models/product.js";
import bcrypt from "bcrypt";
import validator from "validator";


const fillForm_get = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ error: "Product not found." });
      }
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const addProduct_post = async (req, res) => {
    try {
      const errors = validator(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { category, subCategory, size, condition, brand, price, details } = req.body;
      const images = req.files.map(file => file.filename);
  
      const product = new Product({
        category,
        subCategory,
        size,
        condition,
        brand,
        price,
        details,
        images
      });
  
      await product.save();
      res.status(201).json(product);
      res.redirect(`/admin/${req.params.id}/Admin${req.body.category}${req.body.subcategory}`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export {
    fillForm_get,
    addProduct_post,
  };
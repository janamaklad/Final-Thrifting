import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  subCategory: {
    type: String,
    required: [true, "Sub-category is required"],
  },
  size: {
    type: String,
  },
  status: {
    type: String,
    required: [true, "Condition is required"],
  },
  brand: {
    type: String,
    required: [true, "Brand is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"],
  },
  details: {
    type: String,
    required: [true, "Details are required"],
  },
  images: {
    type: [String],
    required: [true, "At least one image is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = model("Product", productSchema);
export default Product;

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\d{11}$/, "Please enter a valid 10-digit phone number"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const User = model("User", userSchema);

export default User;


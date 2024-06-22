import User from "../models/user.js";

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

const getUserById_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
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

export default {
  createUser_post,
  getUsers_get,
  getUserById_get,
  updateUser_put,
  deleteUser_delete,
};

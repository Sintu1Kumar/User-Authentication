const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
      role: role,
    });
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        return res
          .status(200)
          .json({ success: true, message: "User logged in successfully" });
      } else {
        return res.status(401).json({ message: "Incorrect password" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, loginUser };

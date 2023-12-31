const User = require("../Models/user");
const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userRegister = async (req, res) => {
  const { name, email, phone, profession, password, confirmpassword } =
    req.body;
  try {
    const hash_pass = await bcrypt.hash(req.body.password, 10);
    if (req.body.password !== req.body.confirmpassword) {
      throw new Error("Passwords do not match");
    }

    const newUser = new User({
      username: name,
      email,
      phone,
      profession,
      password: hash_pass,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const userlogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("Wrong Credentials");
    }

    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      return res.status(400).json("Wrong Credentials");
    }

    // Token implementation
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    const { password, ...other } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { userRegister, userlogin };

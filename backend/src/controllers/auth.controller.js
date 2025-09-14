const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const genToken = require("../utils/generate.token");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    genToken(user._id, res);
    res.status(201).json({ message: "User created Successfully", user });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
    console.log(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User doesn't exist" });
    const comparedPassword = await bcrypt.compare(
      password,user.password
    );
    if (!comparedPassword)
      return res.status(400).json({ message: "Invalid credentials" });
    genToken(user._id, res);
    res.status(200).json({ message: "Successfully LoggedIn", user });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
const logout = async (req, res) => {
    try {
        res.cookie("token", "")
        res.status(200).json({message:"Sucessfully Logged out"})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
    }
};
const check = async (req, res) => {
    
};

module.exports = { signup, login, logout, check };

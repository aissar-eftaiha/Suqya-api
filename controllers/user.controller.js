const User = require("../models/User");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNum, city } = req.body;
    if (!firstName || !lastName || !email || !password || !phoneNum || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({
        message: "user exist before",
      });
    }

    const role = await Role.findOne({ name: "User" });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      phoneNum,
      role: role._id,
      city,
    });

    res.status(201).json({
      message: "succsful register",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "missing data",
      });
    }
    const user = await User.findOne({ email }).populate("role");
    if (!user) {
      return res.status(404).json({
        message: "user not found ",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "password is not correct",
      });
    }

    const payload = {
      id: user._id,
      role: user.role.name,
    };

    const generate = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    res.status(200).json({
        message : "login sucsses",
        data : user,
        token  : generate,
    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  register,
  login,
};

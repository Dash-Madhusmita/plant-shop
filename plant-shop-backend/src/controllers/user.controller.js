const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const userBody = req.body;
    const savedUser = await userModel.create(userBody);
    if (savedUser) {
      const generatedToken = jwt.sign(
        { userId: savedUser._id, email: savedUser.email },
        process.env.JWT_SECRET,

        { expiresIn: "1440m" }
      );
      res.status(201).send({ user: savedUser, token: generatedToken });
    } else {
      res.status(400).send({ message: "User registration failed" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    // const email=req.body.email;
    // const password=req.body.password;
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email, password: password });
    if (user) {
        console.log("gdh",process.env.JWT_SECRET);
      const generatedToken = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,

        { expiresIn: "1440m" }
      );
      res.status(200).send({ user: user, token: generatedToken });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  registerUser,loginUser
};

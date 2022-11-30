const User = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.jwt;

exports.registerUser = async (req, res) => {
  const { email, password: plainTextPassword, firstName, lastName } = req.body;
  // encrypting our password to store in database
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(plainTextPassword, salt);
  try {
    // storing our user data into database
    const response = await User.create({
      email,
      password,
      firstName,
      lastName,
    });
    res.send({ status: 200, error: "User registred" });
  } catch (error) {
    console.log(JSON.stringify(error));
    if (error.code === 11000) {
      return res.send({ status: "error", error: "email already exists" });
    }
    throw error;
  }
};
verifyUserLogin = async (email, password) => {
  try {
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) {
      return { status: "error", error: "user not found" };
    }
    if (await bcrypt.compare(password, user.password)) {
      // creating a JWT token
      token = jwt.sign(
        { id: user._id, username: user.email, type: "user" },
        "JWT_SECRET",
        { expiresIn: "2h" }
      );
      console.log("logged in");
      return { status: "ok", data: token };
    }
    return { status: "error", error: "invalid password" };
  } catch (error) {
    console.log(error);
    return { status: "error", error: "timed out" };
  }
};
exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email);
  // we made a function to verify our user login
  const response = await verifyUserLogin(email, password);
  if (response.status === "ok") {
    console.log(token);
    // storing our JWT web token as a cookie in our browser
    res.cookie("token", token, {
      maxAge: 2 * 60 * 60 * 1000,
      httpOnly: true,
    }); // maxAge: 2 hours
  } else {
    res.json(response);
  }
};

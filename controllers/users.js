const { User } = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already registred");
  user = new User(
    _.pick(req.body, ["password", "firstName", "lastName", "email", "isAdmin"])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
};

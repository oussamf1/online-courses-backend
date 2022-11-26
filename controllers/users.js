const  User  = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
try   {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already registred");
  user = new User(
    _.pick(req.body, ["password", "firstName", "lastName", "email", "isAdmin"])
  );
  console.log(user)
  const salt = await bcrypt.genSalt(10);
  console.log(salt)
  user.password = await bcrypt.hash(user.password, salt);
  console.log(user.password)
  await user.save();
  await course.save();
  res.status(201).send({
    message: "User Created",
  });
  }
  catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};

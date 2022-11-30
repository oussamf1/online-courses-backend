const express = require("express");
const { registerUser, login } = require("../controllers/users");
const router = express.Router();
router.post("/sign-up", registerUser);
router.post("/sign-in", login);

module.exports = router;

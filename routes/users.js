const express = require("express");
const { registerUser } = require("../controllers/users");
const router = express.Router();
router.post("/sign-up", registerUser);
module.exports = router;

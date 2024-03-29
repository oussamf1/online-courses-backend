const express = require("express");
const { registerUser, login, logout } = require("../controllers/users");
const isAdmin = require("../middlewares/isAdmin");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
router.post("/sign-up", registerUser);
router.post("/sign-in", login);
router.get("/sign-out", logout);
router.get("/isAuth", isLoggedIn);
router.get("/isAdmin", isAdmin);
module.exports = router;

const express = require("express");
const { addOrder, getOrders, getAllOrders } = require("../controllers/order");
const auth = require("../middlewares/auth");
const isLoggedIn = require("../middlewares/isLoggedIn");
router = express.Router();
router.post("/create", auth, addOrder);
router.get("/summary", auth, getOrders);
router.get("/all", getAllOrders);

module.exports = router;

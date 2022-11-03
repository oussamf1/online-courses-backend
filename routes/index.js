const userRoutes = require("../routes/users");
const express = require("express");
const coursesRoutes = require("../routes/courses");
const availabilityRoutes = require("../routes/availability");
const BaseRouter = express.Router();

BaseRouter.use("/courses", coursesRoutes);
BaseRouter.use("/users", userRoutes);
BaseRouter.use("/availability", availabilityRoutes);
module.exports = BaseRouter;

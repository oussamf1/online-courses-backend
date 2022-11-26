const express = require("express");
const {
  addCourse,
  getRegularCourses,
  getCourse,
} = require("./../controllers/courses");

const router = express.Router();

router.post("/add", addCourse);
router.get("/getAll", getRegularCourses);
router.get("/:id", getCourse);
module.exports = router;

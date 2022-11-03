const express = require("express");
const {
  addCourse,
  getRegularCourses,
  getTrialCourses,
} = require("./../controllers/courses");

const router = express.Router();

router.post("/add", addCourse);
router.get("/getRegular", getRegularCourses);
router.get("/getTrial", getTrialCourses);

module.exports = router;

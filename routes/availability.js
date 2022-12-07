const express = require("express");
const {
  addAvailability,
  deleteAvailability,
  addDate,
  addCourse,
  getTutorsList,
  getAvailabilities,
  getCoursesAvailability,
} = require("../controllers/availability");
const auth = require("../middlewares/isLoggedIn");
const router = express.Router();

router.post("/add", addAvailability);
router.post("/delete", deleteAvailability);
router.post("/addDate", addDate);
router.post("/addCourse", addCourse);
router.get("/getTutors", getTutorsList);
router.get("/getAvai", getAvailabilities);
router.post("/getCourseAvailability", getCoursesAvailability);

module.exports = router;

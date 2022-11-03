const express = require("express");
const {
  addAvailability,
  deleteAvailability,
  addDate,
  addCourse,
  getTutorsList,
  getAvailabilities,
} = require("../controllers/availability");
const router = express.Router();

router.post("/add", addAvailability);
router.post("/delete", deleteAvailability);
router.post("/addDate", addDate);
router.post("/addCourse", addCourse);
router.get("/getTutors", getTutorsList);
router.get("/getAvai", getAvailabilities);

module.exports = router;

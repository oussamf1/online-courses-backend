const Availability = require("../models/availability");
const Course = require("../models/course");
exports.addAvailability = async (req, res, next) => {
  try {
    let availability = new Availability({
      name: req.body.name,
      email: req.body.email,
    });
    await availability.save();
    res.status(201).send({
      message: "Tutor added",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};

exports.deleteAvailability = async (req, res, next) => {
  try {
    const availability = await Availability.findByIdAndDelete(req.body.id);
    res.status(201).send({
      message: "Tutor deleted",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};
exports.addDate = async (req, res, next) => {
  try {
    let date = {};
    date = { day: req.body.day, time: req.body.time };
    const availability = await Availability.find({ name: req.body.tutor });
    availability[0]?.dates.push(date);
    await availability[0].save();
    res.status(201).send({
      message: "date added",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};
exports.addCourse = async (req, res, next) => {
  try {
    let course = { courseTitle: req.body.course };
    const availability = await Availability.find({ name: req.body.tutor });
    availability[0]?.courses.push(course);
    await availability[0].save();
    res.status(201).send({
      message: "coruse added",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};
exports.getTutorsList = async (req, res, next) => {
  try {
    const tutors = await Availability.find();
    res.status(200).send({
      tutors: tutors,
      message: "list of Tutors ",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};
exports.getAvailabilities = async (req, res, next) => {
  try {
    const availability = await Availability.find();
    res.status(200).send({
      availability: availability,
      message: "list of availabilities ",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};
exports.getCoursesAvailability = async (req, res, next) => {
  const course_id = req.body.course_id;
  const course = await Course.findById(course_id);
  const availability = await Availability.find({
    courses: { $elemMatch: { courseTitle: course.title } },
  });
  console.log(availability);
  let datesList = [];
  let dateAtutor = {};
  availability.forEach(function (av) {
    av.dates.forEach(function (date) {
      if (date.reserved == false) {
        dateAtutor = { d: date, tutor: av.name };
        datesList.push(dateAtutor);
      }
    });
  });
  res.status(200).send({
    dateAndTutor: datesList,
    message: "list of dates",
  });
};

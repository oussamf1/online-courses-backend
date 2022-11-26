const Availability = require("../models/availability");
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
    console.log(req.body);
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
    const availability = await Availability.find({ tutor: req.body.tutor });
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
    const availability = await Availability.find({ tutor: req.body.tutor });
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
    console.log(availability);
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

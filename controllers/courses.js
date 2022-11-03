const Course = require("../models/course");

exports.addCourse = async (req, res, next) => {
  try {
    let course = new Course({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      courseType: req.body.courseType,
    });
    console.log(course);
    await course.save();
    res.status(201).send({
      message: "Course Created",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};

exports.getRegularCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ courseType: "Regular" });
    res.status(200).send({
      courses: courses,
      message: "list of Regular courses",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};

exports.getTrialCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ courseType: "Trial" });
    res.status(200).send({
      courses: courses,
      message: "list of Regular courses",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: "course delted",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};

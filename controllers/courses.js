const Course = require("../models/course");

exports.addCourse = async (req, res, next) => {
  try {
    let course = new Course({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      url: req.body.url,
    });
    console.log(course);
    await course.save();
    res.status(201).send({
      message: "Course Created",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
      success: false,
    });
  }
};

exports.getRegularCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({});
    res.status(200).send({
      courses: courses,
      message: "list of courses",
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
exports.getCourse = async (req, res, next) => {
  try {
    console.log(req.params);
    const id = req.params.id;
    const course = await Course.findById(id);
    res.status(200).send({
      course: course,
      message: "Course found",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
    });
  }
};

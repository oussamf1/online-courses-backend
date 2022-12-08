const Order = require("../models/order");
const Course = require("../models/course");
const Availability = require("../models/availability");

exports.addOrder = async (req, res, next) => {
  try {
    const course_id = req.body.course_id;
    const course_date = req.body.course_date;
    const course_tutor = req.body.course_tutor;
    const numberOfClasses = parseInt(req.body.numberOfClasses);
    const studentName = req.body.studentName;
    const user_email = req.user.username;
    let date = course_date.split("-");
    const day = date[0];
    const time = date[1];

    const course = await Course.findById(course_id);
    let order = new Order({
      user_email: user_email,
      course: course.title,
      studentName: studentName,
      numberOfClasses: numberOfClasses,
      courseDate: course_date,
      tutor: course_tutor,
      finalPrice: course.price * numberOfClasses,
      orderDate: new Date(),
    });
    const availability = await Availability.find({
      name: order.tutor,
    });
    availability[0].dates.forEach(function (date) {
      if (date.day == day && date.time == time) {
        date.reserved = true;
      }
    });
    await availability[0].save();
    await order.save();
    res.status(201).send({
      message: "Order Created",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "server side error",
      success: false,
    });
  }
};
exports.getOrders = async (req, res, next) => {
  const user_email = req.user.username;
  try {
    const orders = await Order.find({ user_email: user_email });
    console.log(orders);
    res.status(200).send({
      orders: orders,
      message: "list of orders",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
      success: false,
    });
  }
};
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.status(200).send({
      orders: orders,
      message: "list of orders",
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "server side error",
      success: false,
    });
  }
};

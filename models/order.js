const { number } = require("joi");
const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  user_email: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    default: null,
  },
  course: {
    type: String,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  numberOfClasses: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  courseDate: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
  },
  tutor: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("orders", orderSchema);

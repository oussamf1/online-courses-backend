const { number } = require("joi");
const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Courses", courseSchema);

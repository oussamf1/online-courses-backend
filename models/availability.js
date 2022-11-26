const mongoose = require("mongoose");
const dateSchema = mongoose.Schema({
  courses: [
    {
      courseTitle: {
        type: String,
      },
    },
  ],
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dates: [
    {
      day: {
        type: String,
      },
      time: {
        type: String,
      },
      reserved: {
        type: Boolean,
        default: false,
      },
    },
  ],
});
module.exports = mongoose.model("availabilities", dateSchema);

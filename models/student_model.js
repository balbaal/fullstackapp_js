const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    unique: true,
    default: function() {
      return (
        Math.floor(Math.random() * 900000000300000000000) + 1000000000000000
      );
    }
  },
  name: {
    type: String,
    required: true
  },
  college_id: {
    type: Number,
    required: true
  },
  majoring: {
    type: String,
    required: true
  },
  identification_number: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("student", StudentSchema);

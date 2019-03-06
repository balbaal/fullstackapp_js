const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
  college: {
    type: String,
    required: true
  },
  _id: {
    type: Number,
    required: true,
    unique: true,
    default: function() {
      return (
        Math.floor(Math.random() * 900000000300000000000) + 1000000000000000
      );
    }
  }
});

module.exports = mongoose.model("college", CollegeSchema);

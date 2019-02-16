const express = require("express");
const router = express.Router();

// Student Model Schema
const StudentModel = require("../../models/student_model");

// @route       POST api/student
// @desc        Create New Student
// @access      Public
router.post("/", (req, res) => {
  const newStudent = new StudentModel({
    name: req.body.name,
    identification_number: req.body.identification_number,
    college: req.body.college,
    year: req.body.year,
    majoring: req.body.majoring
  });

  res.send(newStudent).status(201);
  newStudent
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => res.json(err).status(400));
});

module.exports = router;

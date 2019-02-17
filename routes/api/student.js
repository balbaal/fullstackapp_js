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

  newStudent
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => res.json(err).status(400));
});

// @route     GET api/student
// @desc      Show All Student
// @access    Public
router.get("/", (req, res) => {
  StudentModel.find()
    .then(result => {
      if (result.length > 0) {
        res.json(result).status(200);
      } else {
        res.json({ message: "Data Not Available" }).status(200);
      }
    })
    .catch(err => res.json(err).status(500));
});

// @route   GET api/student/:id
// @desc    Show Detail Student
// @access  Public
router.get("/:id", (req, res) => {
  StudentModel.findById(req.params.id)
    .then(result => {
      res.send(result).status(200);
      console.log(result);
    })
    .catch(err => res.send(err).status(400));
});

// @route   PUT api/student/:id
// @desc    Update Student
// @access  Public
router.put("/:id", (req, res) => {
  StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.send(result).status(200))
    .catch(err => res.send(err).status(400));
});

// @route DELETE api/student/:id
// @desc  Delete Student
// @access Public
router.delete("/:id", (req, res) => {
  StudentModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

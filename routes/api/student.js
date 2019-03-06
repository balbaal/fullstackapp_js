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
    college_id: req.body.college_id,
    year: req.body.year,
    majoring: req.body.majoring
  });

  newStudent
    .save()
    .then(result => res.status(201).json({ message: result, success: true }))
    .catch(err =>
      res
        .json({ message: "failed to make new student", success: false })
        .status(400)
    );
});

// @route     GET api/student
// @desc      Show All Student
// @access    Public

router.get("/", (req, res) => {
  StudentModel.aggregate([
    {
      $lookup: {
        from: "colleges",
        localField: "college_id",
        foreignField: "_id",
        as: "college_detail"
      }
    }
  ])
    .then(result => {
      if (result.length > 0) {
        res.json({ message: result, success: true }).status(200);
      } else {
        res.json({ message: "Data Not Available", success: false }).status(404);
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
      res.json({ message: result, success: true }).status(200);
    })
    .catch(err =>
      res
        .status(404)
        .json({ success: false, message: `Id ${req.params.id} not found` })
    );
});

// @route   PUT api/student/:id
// @desc    Update Student
// @access  Public
router.put("/:id", (req, res) => {
  StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json({ message: result, success: true }).status(200))
    .catch(err =>
      res
        .json({
          message: `update id : ${req.params.id} failed`,
          success: false
        })
        .status(400)
    );
});

// @route DELETE api/student/:id
// @desc  Delete Student
// @access Public
router.delete("/:id", (req, res) => {
  StudentModel.findByIdAndDelete(req.params.id)
    .then(() =>
      res.status(200).json({
        message: `success delete id : ${req.params.id}`,
        success: true
      })
    )
    .catch(err =>
      res.status(404).json({
        message: `failed to update id : ${req.params.id}`,
        success: false
      })
    );
});

module.exports = router;

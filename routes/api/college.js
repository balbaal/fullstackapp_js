const express = require("express");
const router = express.Router();

// College Schema
const CollegeModel = require("../../models/college_model");
const StudentModel = require("../../models/student_model");

// @route       POST api/college
// @desc        create new college
// @access      public
router.post("/", (req, res) => {
  const newCollege = new CollegeModel({
    college: req.body.college
  });

  newCollege
    .save()
    .then(result => res.json({ message: result, success: true }).status(201))
    .catch(err =>
      res.json({ message: "failed create college", success: false }).status(400)
    );
});

// @route     GET api/college
// @desc      Show All college
// @access    Public
router.get("/", (req, res) => {
  CollegeModel.find()
    .then(result => {
      if (result.length > 0) {
        res.json({ message: result, success: true }).status(200);
      } else {
        res.json({ message: "Data Not Available", success: false }).status(404);
      }
    })
    .catch(err => res.json(err).status(500));
});

// @route   DELETE api/college/id
// @desc    delete data college
// @access  public
router.delete("/:id", (req, res) => {
  // **
  // search data student by college id
  StudentModel.find({ college_id: req.params.id })
    .lean()
    .then(res_student => {
      if (res_student.length > 0) {
        // try looping to deleting all student
        StudentModel.deleteMany({ college_id: req.params.id }).then(() => {
          // after deleting all student, continue to deleting college
          CollegeModel.findByIdAndDelete(req.params.id).then(() =>
            res.status(200).json({
              message: `success delete id : ${req.params.id}`,
              success: true
            })
          );
        });
      } else {
        CollegeModel.findByIdAndDelete(req.params.id)
          .then(() =>
            res.status(200).json({
              message: `success delete id : ${req.params.id}`,
              success: true
            })
          )
          .catch(err =>
            res.status(404).json({
              message: `failed to delete id : ${req.params.id}`,
              success: false
            })
          );
      }
    })
    .catch(err =>
      res.json({
        message: `something error when find college id in student`,
        success: false
      })
    );
});

// @route   GET api/college/id
// @desc    get detail college
// @access  public
router.get("/:id", (req, res) => {
  CollegeModel.findById(req.params.id)
    .then(result => {
      res.json({ message: result, success: true }).status(200);
    })

    .catch(error => {
      res
        .json({ message: `Id ${req.params.id} not found`, success: false })
        .status(404);
    });
});

module.exports = router;

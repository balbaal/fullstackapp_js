const express = require("express");
const router = express.Router();

// College Schema
const CollegeModel = require("../../models/college_model");

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

module.exports = router;
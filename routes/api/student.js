const express = require("express");
const router = express.Router();
// const { check, validationResult } =  require('express-validator');
const Student = require("../../models/Student");

router.post("/", async (req, res) => {
  // const errors = validationResult(req);
  // if(!errors.isEmpty()){
  //     return res.status(400).json({ errors: errors.array() })
  // }

  const { email, password, mobile, address } = req.body;

  try {
    let student = await Student.findOne({ email });
    console.log(student);

    if (student) {
      res.send("User already Exists..");
    }

    student = new Student({
      email,
      password,
      mobile,
      address,
    });

    await student.save();

    res.send("User register");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/student
// @desc    get student all data
// @access  public

router.get("/", async (req, res) => {
  try {
    const students = await Student.find().populate("student", [
      "name",
      "email",
      "mobile",
      "address",
    ]);
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;

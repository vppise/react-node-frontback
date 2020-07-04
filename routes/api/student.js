const express = require('express');
const router =  express.Router();

// @route   POST api/students
// @desc    student data
// @access  public

router.get('/', (req, res) => {
    console.log(req.body)
    res.send('Student route');
})

module.exports = router;
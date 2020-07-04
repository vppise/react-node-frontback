const express = require('express');
const router =  express.Router();
const { check, validationResult } =  require('express-validator');
const Student =  require('../../models/Student');   

// @route   POST api/students
// @desc    student data
// @access  public

router.post('/',[
    check('name','Name is Required').not().isEmpty(),
    check('email','Enter valid email address').isEmail(),
    check('mobile','Mobile number is Required').isLength({min:10}),
    check('address','Address is Required').not().isEmpty(),
    check('course','Course is Required').not().isEmpty(),
    // check('date','Date is Required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const {name, email, mobile, address, course, date} = req.body;

    try {
        let student = await Student.findOne({ email });
        console.log(student)

        if(student){
            res.status(400).json({errors: [{ msg: 'Student Already Exists...' }]})
        }

        student = new Student({
            name,
            email,
            mobile,
            address,
            course,
            date
        })

        await student.save();

        res.send('Student register');
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
    // console.log(req.body)
    // res.send('Student route');
})

module.exports = router;
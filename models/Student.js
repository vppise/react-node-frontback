const mongoose = require ('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        // default: Date.now
    }
})

module.exports = Student = mongoose.model('student',StudentSchema)
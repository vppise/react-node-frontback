const mongoose = require ('mongoose');

const StudentSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password: {
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
    }
})

module.exports = Login = mongoose.model('student',StudentSchema)
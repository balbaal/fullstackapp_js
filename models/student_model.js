const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({ 
    name: {
        type: String,
        required: true
    }, 
    college: {
        type: String,
        required: true
    },
    majoring: {
        type: String,
        required: true
    },
    identification_number: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("student", StudentSchema)
const mongoose = require('mongoose')

//Define schema first
// which means we are defining the structure of our document
let studentSchema = new mongoose.Schema({
    // making sure name is required
    name: {
        type: String,
        required: true,
    },
    //// making sure age is between a range
    age: {
        type: Number, 
        min: [25, 'Too young'],//custom error message
        max: 50
    },
    country: {
        type: String,
        enum: ['Spain' , 'France', 'Germany']
    }
})

//creates a collection in mongoDB with the name 'students'
let Student = mongoose.model('student', studentSchema)

module.exports = Student
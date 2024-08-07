const mongoose = require('mongoose')
const main = async () => {
    const connection = await mongoose.connect('mongodb://localhost:27017/users')
    console.log('Db connected');
}
const studentSchema = mongoose.Schema({
    rollno: {
        type: Number,
        required: true
    },
    name:
    {
        type: String,
        required: true
    },
    city: String
})
const StudentModel = mongoose.model('student', studentSchema)


module.exports = { main, StudentModel }
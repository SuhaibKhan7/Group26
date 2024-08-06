const mongoose = require('mongoose')

const main = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/userData')
        console.log('Db connected');

        // await StudentModel.insertMany([
        //     {
        //         rollno: '12356',
        //         name: 5457,
        //         age: 43,
        //         married: false
        //     }

        // ])

        const student = new StudentModel({
            rollno: '12356',
            name: 5457,
            age: 43,
            married: false
        })
        await student.save()


        mongoose.disconnect();
        console.log('DB disconnected')


    } catch (error) {
        console.log(error)
        console.log('Database connection Error')
    }
}
const studentSchema = mongoose.Schema({
    rollno: Number,
    name: String,
    age: Number,
    married: Boolean
})
const StudentModel = mongoose.model('student', studentSchema)


main();
const express = require('express')
const studentList = require('../data/student.json');
const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {

    res.json(studentList)


})
studentRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const student = studentList.find((std) => std.id == id)
    res.json(student)


})
studentRouter.post('/', (req, res) => {
    res.send('Student created')
})
studentRouter.patch('/', (req, res) => {
    res.send('Student updated')
})
module.exports = {
    studentRouter
}
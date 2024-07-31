const express = require('express')
const fs = require('fs')
const studentList = require('../data/student.json');
const { error } = require('console');
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
    const lastId = studentList[studentList.length - 1].id + 1;
    // const newuser = {
    //     id: lastId,
    //     ...req.body
    // }
    const newUser = Object.assign({ id: lastId }, req.body);
    studentList.push(newUser);
    console.log(studentList)
    fs.writeFile('./data/student.json', JSON.stringify(studentList), error => {
        if (error) {
            console.log(error)
        }
    })


    res.send('Student created')
})

studentRouter.patch('/:id', (req, res) => {
    const _id = req.params.id;
    const StudentToUpdate = studentList.find(std => std.id == _id)
    const Index = studentList.indexOf(StudentToUpdate)
    studentList[Index] = Object.assign(StudentToUpdate, req.body)
    console.log(studentList)
    res.send('Student updated')
})
studentRouter.delete('/:id', (req, res) => {
    const _id = req.params.id;
    const StudentToUpdate = studentList.find(std => std.id == _id)
    const Index = studentList.indexOf(StudentToUpdate)
    studentList.splice(Index, 1);
    fs.writeFile('./data/student.json', JSON.stringify(studentList), error => {
        if (error) {
            console.log(error)
        }
        else {
            res.send('User Deleted')
        }
    })


})
module.exports = {
    studentRouter
}
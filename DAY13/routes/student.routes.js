const express = require('express')
const { getAllStudents, createStudent, updateStudent, deleteStudent, getSingleStudent } = require('../controllers/student.controller') 
const studentRouter = express.Router();
studentRouter.get('/', getAllStudents)
studentRouter.post('/', createStudent)
studentRouter.patch('/:id', updateStudent)
studentRouter.delete('/:id', deleteStudent)
studentRouter.get('/search', getSingleStudent)

module.exports = studentRouter
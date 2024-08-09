
const express = require('express')
const StudentModel = require('../model/student.model')
const createStudent = async (req, res) => {
    console.log(req.body)
    const payload = req.body
    const data = new StudentModel(payload)
    await data.save();
    res.send('Data Received')
}

const getAllStudents = (req, res) => {

}

const getSingleStudent = (req, res) => {

}

const updateStudent = (req, res) => {

}
const deleteStudent = (req, res) => {

}
module.exports = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent
}
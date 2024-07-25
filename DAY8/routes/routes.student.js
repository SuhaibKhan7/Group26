const express = require('express')

const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
    res.send('Student list')
})
studentRouter.post('/', (req, res) => {
    res.send('Student created')
})
studentRouter.patch('/', (req, res) => {
    res.send('Student updated')
})
module.exports={
    studentRouter
}
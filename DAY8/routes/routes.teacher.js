const express = require('express')

const teacherRouter = express.Router();


//teacher


teacherRouter.get('/teacher', (req, res) => {
    res.send('teacher list')
})
teacherRouter.post('/teacher', (req, res) => {
    res.send('teacher created')
})
teacherRouter.patch('/teacher', (req, res) => {
    res.send('teacher updated')
})
module.exports = {
    teacherRouter
}
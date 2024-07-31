const express = require('express')
const { studentRouter } = require('./routes/routes.student')
const { teacherRouter } = require('./routes/routes.teacher')
const app = express();

//middlware

app.use(express.json())
app.use('/student', studentRouter)
app.use('/teacher', teacherRouter)

app.get('/', (req, res) => {
    res.send('Dashboard')
})

app.listen(3500, () => {
    console.log('server is running')
})
const express = require('express')
const { main, StudentModel } = require('./db')
const app = express();
//middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome')
})
app.post('/student', async (req, res) => {
    const user = new StudentModel(req.body)
    await user.save()
    res.send('Data received')
})
app.get('/student', async (req, res) => {
    const query = req.query
    const students = await StudentModel.find(query)
    res.send(students)
})
app.get('/student/:id', async (req, res) => {
    const pn = req.params.id;
    let il = 2

    const students = await StudentModel.find().skip((pn - 1) * il).limit(il)
    if (students.length == 0) {
        res.send(students)
    }
    else {
        res.send("User Not Found")
    }
})




app.listen(3600, async () => {
    await main();
    console.log('server started')
})
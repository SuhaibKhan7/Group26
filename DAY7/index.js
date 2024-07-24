const express = require('express');
const{permission}=require('./middlewares/middleware.permission');
const {timeLog}=require('./middlewares/middleware.restime')
const app = express();

app.use(permission);
app.use(timeLog);

app.get('/', (req, res) => {

    res.send('This is the home page')
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('This is the home page')
})

app.use(express.json())

app.get('/data', (req, res) => {
    res.send('This is the data page :')
})
app.post('/data', (req, res) => {
    // console.log(req.body)
    res.send('Data received')
})
app.listen(3500);
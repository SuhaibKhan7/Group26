const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { title: "Home" })
})
app.get('/adduser', (req, res) => {
    res.render('adduser', { title: "Add user" })
})

app.listen(3002, () => {
    console.log('server is running at http://localhost:3002')
})
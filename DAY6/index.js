const express = require('express');
const app = express();

//middleware

app.use(express.json())



app.get('/', (req, res) => {
    res.send('This is end');
})
app.get('/profile', (req, res) => {
    res.send('This is profile')
})
app.get('/data', (req, res) => {
    res.send('Here you go : this is your data')
})
app.post('/data', (req, res) => {
    const { username, password } = req.body
    console.log(username);
    res.send('Thankyou Data received');
})



app.listen(3400);
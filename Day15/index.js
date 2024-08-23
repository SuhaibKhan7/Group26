const express = require('express')
const app = express();
const client_id = 'Ov23lijB9hNnNjirdHAm'
const clientsecret = 'c121f77ec65d29672d837d659d04cc3b7355efe3'
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log("Server is running")
})

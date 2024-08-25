const express = require('express')
const app = express();
const client_id = 'Ov23lijB9hNnNjirdHAm'
const clientsecret = 'c121f77ec65d29672d837d659d04cc3b7355efe3'
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/auth/github', async (req, res) => {
    const code = req.query.code
    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application / json"
        },
        body: JSON.stringify({
            client_id: 'Ov23lijB9hNnNjirdHAm',
            client_secret: 'c121f77ec65d29672d837d659d04cc3b7355efe3',
            code: code
        })
    })
    const token = await response.json()
    console.log(token)


    res.send('Signing up.....')
})




app.listen(3000, () => {
    console.log("Server is running")
})

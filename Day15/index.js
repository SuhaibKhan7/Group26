const express = require('express')
var session = require('express-session')
const app = express();
const client_id = 'Ov23lijB9hNnNjirdHAm'
const clientsecret = 'c121f77ec65d29672d837d659d04cc3b7355efe3'

app.use(session({
    secret: 'session secret',
    resave: false,
    saveUninitialized: true,
}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/auth/github', async (req, res) => {
    const { code } = req.query
    console.log(code)
    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            client_id: process.env.AUTH0_CLIENTID,
            client_secret: process.env.AUTH0_SECRETKEY,
            code: code
        })
    })

    const token = await response.json()
    console.log(token)
    const userresponse = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        }
    })
    const userdetails = await userresponse.json()
    console.log(userdetails)
    req.session.user = userdetails;
    req.session.message = 'This is session'

    res.redirect('/dashboard')


})
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`welcome ${req.session.user.login} ${req.session.message}`)
    }
    else {
        res.send("Welcome Guest")
    }

})



app.listen(4000, () => {
    console.log("Server is running")
})

require('dotenv').config()
const express = require('express')
const session = require('express-session')
const Filestore = require('session-file-store')(session)
const app = express()




app.use(session({
    store: new Filestore,
    secret: process.env.SESSIONKEY,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}))
app.get('/', (req, res) => {
    if (req.session.v) {
        req.session.v++
    }
    else {
        req.session.v = 1
    }
    res.send(`Total Reload =${req.session.v}`)
})
app.get('/count', (req, res) => {
    res.send(`total reload in this route is ${req.session.v}`)
})
app.get('/logout', (req, res) => {
    req.session.destroy((e) => {
        if (e) {
            console.log(e)
            return
        }
        req.cookies = " ";
    })
    res.redirect('/')
})



const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})

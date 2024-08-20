const express = require('express')
const main = require('./db')
const registerRouter = require('./routes/user.registerRoute')
const loginRouter = require('./routes/user.loginRoute')
const app = express()
app.use(express.json())

app.use('/signup', registerRouter)
app.use('/login', loginRouter)

app.get('/', (req, res) => {
    res.send("This is the homepage")
})
app.listen(4001, async () => {
    await main();
    console.log('server running')
})
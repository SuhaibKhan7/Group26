const express = require('express')
const main = require('./db')
const registerRouter = require('./routes/user.registerRoute')
const app = express()

app.use(express.json())


app.use('/register', registerRouter)

app.get('/', (req, res) => {
    res.send("This is the homepage")
})



app.listen(4001, async () => {
    await main();
    console.log('server running')
})
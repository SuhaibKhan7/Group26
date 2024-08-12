const express = require('express')
const main = require('./db');
const studentRouter = require('./routes/student.routes');
const port = process.env.PORT
const app = express();

app.use(express.json())
app.use('/student', studentRouter)

app.get('/', (req, res) => {
    res.send('Home Page')

})


app.listen(port, async () => {
    await main();
    console.log('Server Connected')
});
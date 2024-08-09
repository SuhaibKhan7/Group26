const express = require('express')
const main = require('./db');
const studentRouter = require('./routes/student.routes');
const app = express();

app.use(express.json())
app.use('/student', studentRouter)

app.get('/', (req, res) => {
    res.send('Home Page')

})


app.listen(4001, async () => {
    await main();
    console.log('Server Connected')
});
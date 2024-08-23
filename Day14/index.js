const express = require('express')
const main = require('./db')
const multer = require('multer');
const registerRouter = require('./routes/user.registerRoute')
const loginRouter = require('./routes/user.loginRoute')
const profileRouter = require('./routes/user.profileRoute')


const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use('/signup',  registerRouter)
app.use('/login', loginRouter)
app.use('/profile', profileRouter)

app.get('/', (req, res) => {
    res.send("This is the homepage")
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {

        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('profilepic'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
})










app.use((err, req, res, next) => {
    // Ensure the status code is a valid HTTP status code
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        message: err.message || 'Internal Server Error',
    });
});

app.listen(4001, async () => {
    await main();
    console.log('server running')
})
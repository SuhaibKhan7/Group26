const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {

        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })
const uploadPic = (req, res, next) => {
    upload.single('profilepic')(req, res, function (err) {
        console.log(req.body)
        console.log(req.file)
        next()
    })
}


module.exports = uploadPic
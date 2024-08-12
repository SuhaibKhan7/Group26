const { default: mongoose } = require("mongoose");
let validator = require('validator');
const registerSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    cpass: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Email not valid"
        }

    }
})
const RegisterModel = mongoose.model('userlist', registerSchema)
module.exports = RegisterModel
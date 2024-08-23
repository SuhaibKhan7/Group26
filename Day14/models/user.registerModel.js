const { default: mongoose } = require("mongoose");
let validator = require('validator');
const registerSchema = mongoose.Schema({
    name:
    {
        type: String,
    },
    pass: {
        type: String,
    },
    cpass: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        // validate: {
        //     validator: validator.isEmail,
        //     message: "Email not valid"
        // }

    },
    profileImage: {
        filename: { type: String, required: true },
        path: { type: String, required: true },
        size: { type: Number, required: true },
        mimetype: { type: String, required: true }
    }


})
const RegisterModel = mongoose.model('userlist', registerSchema)
module.exports = RegisterModel
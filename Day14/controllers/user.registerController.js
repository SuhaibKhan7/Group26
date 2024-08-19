const RegisterModel = require("../models/user.registerModel")
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const { name, pass, cpass, email } = req.body
    console.log(req.body)
    if (pass != cpass) {
        res.status(400).send('Password missmatch')
    }
    else {
        bcrypt.hash(pass, 10, async function (err, hash) {
            if (err) {
                res.send("Hash not Generated")
            }
            const user = new RegisterModel({ name, pass: hash, email })
            try {
                await user.save()
            } catch (error) {
                console.log(error)
            }
        });

    }
    res.send('Register Successfull')
}

module.exports = { createUser }
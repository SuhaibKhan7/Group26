const RegisterModel = require("../models/user.registerModel")

const createUser = async (req, res) => {
    const { name, pass, cpass, email } = req.body
    if (pass != cpass) {
        res.status(400).send('Password missmatch')
    }
    else {
        const user = new RegisterModel({ name, pass, email })
        try {
            await user.save()
        } catch (error) {
            console.log(error)
        }
    }



    res.send('Register Successfull')
}

module.exports = { createUser }
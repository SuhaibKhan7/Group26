const RegisterModel = require("../models/user.registerModel")
const bcrypt = require('bcrypt');
const loginUser = async (req, res) => {

    const { email, pass } = req.body
    const user = await RegisterModel.find({ email })
    if (user.length == 0) {
        res.send('User Not Found')
    }
    else {
        bcrypt.compare(pass, user[0].pass, function (err, result) {
            if (err) {
                res.send('Hash not generated')
                return
            }
            else if (result) {
                res.send('Login Successfull')
            }
            else {
                res.send("Login Failed Either username or password is incorrect")
            }
        });
    }


}
module.exports = loginUser
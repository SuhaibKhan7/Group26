const { jwtGenerate } = require("../middlewares/jwt");
const RegisterModel = require("../models/user.registerModel")
const bcrypt = require('bcrypt');

const loginUser = async (req, res,next) => {

    const { email, pass } = req.body
    const user = await RegisterModel.find({ email })
    if (user.length == 0) {
        const err=new Error("user not found");
        err.statusCode=404;
        next(err);
        //res.send('User Not Found')
    }
    else {
        bcrypt.compare(pass, user[0].pass, function (err, result) {
            if (err) {
                res.send('Hash not generated')
                return
            }
            else if (result) {
                var token = jwtGenerate(user[0].name)
                console.log(token)
                res.send({ message: "Login Successfull", token: token })
            }
            else {
                res.send("Login Failed Either username or password is incorrect")
            }
        });
    }


}
module.exports = loginUser
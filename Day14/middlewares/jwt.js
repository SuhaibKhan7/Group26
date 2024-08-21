const express = require('express')
var jwt = require('jsonwebtoken');
const jwtVerify = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.send("Token Invalid")
    }
    else {
        try {
            var decoded = jwt.verify(token, process.env.JWTKEY);
            console.log(decoded.name)
            req.user = decoded.name;
            next()
        } catch (error) {
            res.redirect('/')
        }

    }


}






const jwtGenerate = (username) => {

    return jwt.sign({ name: username }, process.env.JWTKEY);

}
module.exports = { jwtGenerate, jwtVerify }
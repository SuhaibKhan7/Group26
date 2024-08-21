const userProfile = (req, res) => {
    if (req.user) {

        res.send({ userName: `Dear ${req.user}`, message: "This is your profile" })
    }
    else {
        res.send("Please Login")
    }

}
module.exports = userProfile
const mongoose = require('mongoose')
const main = async (req, res) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userlist')
        console.log('Database Connected')
    } catch (error) {
        console.log(err)
    }
}
module.exports = main;
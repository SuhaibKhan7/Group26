const mongoose = require('mongoose')
require('dotenv').config()
const main = async (req, res) => {
    try {
        await mongoose.connect(process.env.DBCON)
        console.log('Database Connected')
    } catch (error) {
        console.log(err)
    }
}
module.exports = main;
const mongoose = require('mongoose')
const main = async (req, res) => {
    try {
        await mongoose.connect('mongodb+srv://mycluster:admin@atlascluster.xlm0rrn.mongodb.net/teacherDb?retryWrites=true&w=majority&appName=AtlasCluster')
        console.log('Database Connected')
    } catch (error) {
        console.log(err)
    }
}
module.exports = main;
const express = require('express')
const { createUser } = require('../controllers/user.registerController')
const registerRouter = express.Router()

const multer = require('multer');


console.log('signup router')
registerRouter.post('/', createUser)

module.exports = registerRouter
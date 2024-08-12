const express = require('express')
const { createUser } = require('../controllers/user.registerController')
const registerRouter = express.Router()
registerRouter.post('/', createUser)

module.exports = registerRouter
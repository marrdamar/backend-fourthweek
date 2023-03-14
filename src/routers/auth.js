const route = require("express").Router();
const database = require("..//configs/postgre")
const authController = require('../controllers/auth')

route.post('/register', authController.register)
route.get('/login', authController.login)


module.exports = route
const route = require("express").Router();
const database = require("..//configs/postgre")
const profileController = require('../controllers/profile')

route.patch('/updateProfile', profileController.updateProfile)
route.get('/profile/id=:id', profileController.profile)


module.exports = route
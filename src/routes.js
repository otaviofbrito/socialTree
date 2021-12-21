const express = require('express')
const routes = express.Router()
const profileController = require('./controllers/ProfileController')

//routes
routes.get('/profile', profileController.index)
routes.post('/profile', profileController.update)


module.exports = routes
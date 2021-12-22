const express = require('express')
const CardsController = require('./controllers/CardsController')
const DashboardController = require('./controllers/DashboardController')
const routes = express.Router()
const profileController = require('./controllers/ProfileController')

//routes



routes.get('/', DashboardController.index)
routes.post('/', CardsController.saveCard)
routes.post('/delete/:id', CardsController.deleteCard)
routes.get('/profile', profileController.index)
routes.post('/profile', profileController.update)

module.exports = routes

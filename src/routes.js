const express = require('express')
const routes = express.Router()
const CardsController = require('./controllers/CardsController')
const DashboardController = require('./controllers/DashboardController')
const profileController = require('./controllers/ProfileController')

//routes

routes.get('/', DashboardController.index)
routes.post('/', CardsController.saveCard)
routes.post('/card/delete/:cardId', CardsController.deleteCard)
routes.get('/profile', profileController.index)
routes.post('/profile', profileController.update)

module.exports = routes

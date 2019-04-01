const route = require('express').Router()
const Controller = require('../controllers')
const authorize = require('../middlewares/authorize')
const isUser = require('../middlewares/isUser')

route.get('/:id', Controller.getOne)
route.put('/:id', isUser, Controller.updatePut)
route.use(authorize)
route.get('/', Controller.getAll)
route.post('/', Controller.create)
route.delete('/:id', Controller.delete)

module.exports = route
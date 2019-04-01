const route = require('express').Router()
const user = require('./user')
const Controller = require('../controllers')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

route.get('/', (req, res) => {
  res.send('Test')
})

route.use('/users', authenticate, user)
route.post('/register', Controller.create)
route.post('/login', Controller.login)

module.exports = route
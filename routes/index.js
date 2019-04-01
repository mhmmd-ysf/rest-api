const route = require('express').Router()
const user = require('./user')

route.get('/', (req, res) => {
  res.send('Test')
})
route.use('/api/users', user)

module.exports = route
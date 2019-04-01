const route = require('express').Router()

route.get('/', (req, res) => {
  res.send('eyyyy')
})

module.exports = route
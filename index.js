require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', route)

app.listen(3000, () => {console.log(`Listening on port 3000!`)})
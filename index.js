require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes')
const fs = require('fs')
const port = process.env.PORT || 3000

const config = {
  "production": {
    "username": "postgres",
    "password": process.env.PASSWORD,
    "database": "phase2Student",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
fs.writeFileSync( './config/config.json',JSON.stringify(config, null, 2), 'utf8')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', route)

app.listen(port, () => {console.log(`Listening on port ${port}!`)})
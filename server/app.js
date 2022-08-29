const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

//this is where some things should go

// the routes i made!
app.use('/api', require('./api'))

// will send the app index if a non-api call is made
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })



module.exports = app;


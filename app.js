const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/aliens_db'

const app = express()


mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('... Connection Established With MongoDb...')
})

const alienRouter = require('./routes/alien')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('... Server is running ...')
})

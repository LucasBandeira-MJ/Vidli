require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db =  mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())

const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

// Handle production
if(process.env.NOVE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'))

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html '))
}

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
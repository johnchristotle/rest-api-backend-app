require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')


let uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
console.log('Greetings From Christotle');


const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Successfully Connected to Database'))


//lets make our server acept json
app.use(express.json())

const studentsRouter = require('./routes/students')
app.use('/students', studentsRouter)

app.listen(3000, () => console.log('Server is listening on port 3000'))


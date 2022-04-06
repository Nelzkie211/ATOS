const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { mongoose } = require('./db.js')

const EmployeeCntrl = require('./controllers/employeeController.js')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/employee', EmployeeCntrl)



app.listen(3000, () => console.log('Server is started at port : 3000'))


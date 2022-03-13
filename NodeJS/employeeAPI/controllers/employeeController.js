const express = require('express')
const router = express.Router()
var objectId = require('mongoose').Types.ObjectId

var { Employee } = require('./../models/employee.js')

//get all
router.get('/', (req, res) => {
  Employee.find((err, docs) => {
    if(!err) {res.send(docs)}
    else { console.log('Error retrieving Employees :' + JSON.stringify(err, undefined, 2))}
  })
})

//get specific Employee
router.get('/:id', (req, res) => {
  
  if (!objectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id :+ ${req.params.id}`)
  

  Employee.findById(req.params.id, (err, docs) => {
    if(!err) {res.send(docs)}
    else { console.log('Error retrieving Employee :' + JSON.stringify(err, undefined, 2))}
  })
})


//add Employee
router.post('/', (req, res) => {
  
  var emp = new Employee({
    name: req.body.name,
    gender: req.body.gender,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  })
  emp.save((err, docs) => {
    if(!err) {
      res.send(docs)
      console.log(docs)
    }
    else { console.log('Error saving Employee :' + JSON.stringify(err, undefined, 2))}
  })

})


//update Employee
router.put('/:id', (req, res) => {

  if (!objectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id :+ ${req.params.id}`)

  var emp = {
    name: req.body.name,
    gender: req.body.gender,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  }
  Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true },  (err, docs) => {
    if(!err) {res.send(docs)}
    else { console.log('Error Updating Employee :' + JSON.stringify(err, undefined, 2))}

  })
})


//delete Employee
router.delete('/:id', (req, res) => {

  if (!objectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id :+ ${req.params.id}`)


  Employee.findByIdAndRemove(req.params.id, (err, docs) => {
    if(!err) {res.send(docs)}
    else { console.log('Error Deleting Employee :' + JSON.stringify(err, undefined, 2))}

  })
})


module.exports = router
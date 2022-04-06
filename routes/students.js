//CRUD APP

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// Create Student Schema

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    country: String,
    subscribedToChannel: {type: Boolean, required: true},
    date: {type: Date, required: true, default: Date.now}

})

const Student = mongoose.model('Student', studentSchema);

//GET (all students) CRUD Pt.1a (Read Record)

router.get('/', async (req, res) => {
    try{
    const students = await Student.find()
    res.json(students)
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

//GET (get a single student) CRUD Pt.1b (Read Record)

router.get('/:id', getStudent, (req, res) => {
    res.json(res.student)
})

//POST (Create a student) CRUD Pt.2 (Creat Record)
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,
        subscribedToChannel: req.body.subscribedToChannel,
        
    })

    try{
const newStudent = await student.save()
res.status(201).json(newStudent)
    }
    catch(err) {
res.status(400).json({message: err.message})
    }
})


//PATCH (Update a student record) CRUD Pt.3 (Update Record)
router.patch('/:id', getStudent, async (req, res) => {
    if(req.body.name != null) {
        res.student.name = req.body.name
    }
    if(req.body.age != null) {
        res.student.age = req.body.age
    }
    if(req.body.country != null) {
        res.student.country = req.body.country
    }
    if(req.body.subscribedToChannel != null) {
    res.student.subscribedToChannel = req.body.subscribedToChannel
    }
//no need creating for date as we already provide default
try{
const updatedStudent = await res.student.save()
res.json(updatedStudent)
}
catch (err) {
    res.status(400).json({messsage: err.message})
}

})

//DELETE (Delete a student record) CRUD Pt.4 (Delete Record)

router.delete('/:id', getStudent, async(req, res) => {
    try{
await student.remove()
res.json({message: 'Student Removed Successfully!'})
    }
    catch(err) {
res.status(500).json({message: err.message})
    }
})

// creat a getStudent function

async function getStudent(req, res, next) {
    let student
    try{
student = await Student.findById(req.params.id)
if(student == null) {
    return res.status(400).json('Cannot Find Student')
    }
}
    catch (err) {
return res.status(500).json({message: err.message})
    }
    res.student = student
    next()
}

module.exports = router;


const express = require('express')
//adding mangoose and model
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

// Automatically Parse Incoming Json to Object and access it from req handler
app.use(express.json())

// Create User 
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})
// Read all users
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(201).send(users)

    }).catch((e) => {
        res.status(500).send()
    })
})

// Read user

app.get('/users/:id', (req, res) => {

    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()

    })
})

// Create Task
app.post('/tasks', (req, res) => {

    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch(() => {
        res.status(400).send(e)
    })
})

// Read all Tasks
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(201).send(tasks)

    }).catch((e) => {
        res.status(500).send()
    })
})

// Read Task

app.get('/tasks/:id', (req, res) => {

    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()

    })
})
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
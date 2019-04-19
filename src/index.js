const express = require('express')
//adding mangoose and model
require('./db/mongoose')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT

// Automatically Parse Incoming Json to Object and access it from req handler
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
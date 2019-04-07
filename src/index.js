const express = require('express')
//adding mangoose and model
require('./db/mongoose')

const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


/*  // Middle-Ware 
app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.send('GET methods are disabled')
    } else {
        next()
    }
})
 app.use((req,res,next)=>{
    res.status(503).send('Site is currently down. Check back Soon !')
}) */


// Automatically Parse Incoming Json to Object and access it from req handler
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
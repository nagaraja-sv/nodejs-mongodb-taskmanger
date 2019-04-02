const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})























// DEFINING MODEL


// CREATING INSTANCE 
/* const newtask = new task(
    {
        description: "HI",
        completed: false
    }
)

// INSERTING THE DATA
newtask.save().then(() => {
    console.log(newtask)
}).catch(() => {
    console.log('Error !', error)
}) */
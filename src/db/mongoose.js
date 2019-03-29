const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

/* const me = new User({
    name: 'Andrew',
    age: 27
})
 
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error !', error)
}) */


// DEFINING MODEL
const task = mongoose.model('Task', {

    description: {
        type: String
    },
    completed: {
        type: Boolean
    }

})

// CREATING INSTANCE 
const newtask = new task(
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
})
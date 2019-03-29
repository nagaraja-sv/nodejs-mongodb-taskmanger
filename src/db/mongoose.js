const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        reqyuired: true,
        trim: true,
        lowearcase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }

        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password must be 6 charchters and donot allow keyword password')
            }
        }
    },
    age: {
        type: Number,
        defalut: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('number  is negivtive value')
            }
        }
    }
})

const me = new User({
    name: 'Andrew',
    email: 'venkatanagarajas@gmail.com',
    password: 'Password',
    age: 27
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error !', error)
})


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
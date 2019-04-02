const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = User
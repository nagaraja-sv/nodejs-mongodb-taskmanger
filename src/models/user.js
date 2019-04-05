const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {

    const user = this
    console.log('just before saving!')

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()

})

const User = mongoose.model('User', userSchema)

module.exports = User
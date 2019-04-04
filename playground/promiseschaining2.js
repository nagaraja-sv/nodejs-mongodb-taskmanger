require('../src/db/mongoose')

const User = require('../src/models/user')



// 

/* User.findByIdAndUpdate('5c9dc4c65a6155341cb311ed', { age: 27 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 27 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('5c9dc4c65a6155341cb311ed', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
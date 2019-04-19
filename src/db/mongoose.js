const mongoose = require('mongoose')

mongoose.connect(process.env.MOONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
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
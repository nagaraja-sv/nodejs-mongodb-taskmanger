require('../src/db/mongoose')

const Task = require('../src/models/task')

/* Task.findByIdAndDelete('5ca2e8c33874840ac0bb91cb').then((task) => {
    console.log(task)
    return Task.count({ completed: false })
}).then((result) => {
    console.log(result)

}).catch((e) => {
    console.log(e)
})
 */



const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskAndCount('5ca2e8e43874840ac0bb91cd').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
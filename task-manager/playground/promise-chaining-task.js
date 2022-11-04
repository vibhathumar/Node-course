require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('633ee3a12a1c4fc100b64ef0').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const removeTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

removeTaskAndCount('633ff2555e28296de75e25b7').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
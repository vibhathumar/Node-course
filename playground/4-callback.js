const { count } = require("console")

// setTimeout(() => {
//     console.log('Two second are up!')
// }, 2000)

const names = ['vibha', 'Rakesh', 'Yana']
const shortNames = names.filter((name) => {
    return name.length <=5
})

const postmanRequest = (latiLongi, callback) => {
    setTimeout(() => {
        const data = {
            temperature: 0,
            weather_descriptions: 'sunny'
        }
        callback(data)
    },2000)
    
}

// postmanRequest('12', (callbackData) => {
//     console.log(callbackData)
// })

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num1 + num2
        callback(sum) 
    },2000)

}
add(2,3,(sum) => {
    console.log(sum)
})
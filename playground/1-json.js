const fs = require('fs')
const { json } = require('stream/consumers')
// const book = {
//     title: 'Ego in the enemy',
//     author: 'Ryan Holiday'
// }

//Convert object into JSON(it is string)
//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJSON)
//console.log(bookJSON)

// Convert JSON into object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title)

//const dataBuffer = fs.readFileSync('1-json.json') //give Data in bit and bytes so need to convert into string using toString() method.
//const dataJSON = dataBuffer.toString()
// Convert JSON(it's string) into object
//const data = JSON.parse(dataJSON)

const challangeBuffer = fs.readFileSync('1-json.json')
const challangeData = challangeBuffer.toString()
const challange = JSON.parse(challangeData)

challange.name = 'Vibha'
challange.age = 32

const challangeJSON = JSON.stringify(challange)

fs.writeFileSync('1-json.json', challangeJSON)
//console.log(challange)
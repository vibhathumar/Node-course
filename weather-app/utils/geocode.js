const fs = require('fs')
const postmanRequest = require('postman-request')

const geocode = (address, callback) => {
    
    try{
        const dataBuffer = fs.readFileSync('./mapbox.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        
        const result = data.find((location) => location.title === address.toLowerCase())
    
        if(result){
            callback(undefined, {
                latitude : result.features.center[0],
                longitude : result.features.center[1]
            })
        }else{
            callback('Location not found!', undefined)
        }
    }catch (e){
        callback('Unable to connect to the location service....!', undefined)
    }
}

 module.exports = geocode

// geocode('Sweden', (error, data) => {
//     console.log('Error : ' +error)
//     console.log('Data : latitude :' +data.latitude +', longitude : '+data.longitude)
// })
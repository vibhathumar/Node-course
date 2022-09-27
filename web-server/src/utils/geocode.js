const fs = require('fs')
const path = require('path')
//const postmanRequest = require('postman-request')

const geocode = (address, callback) => {
  
    try{
        const publicDirectoryPath = path.join(__dirname, '../utils')
        const mapboxJSON = publicDirectoryPath+'/mapbox.json'
        const dataBuffer = fs.readFileSync(mapboxJSON)
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        
        const result = data.find((location) => location.title === address.toLowerCase())
    
        if(result){
            callback(undefined, {
                latitude : result.features.center[0],
                longitude : result.features.center[1]
            })
        }else{
            callback('Unable to find location. Try another search.', undefined)
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
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const location = process.argv[2]
//console.log(location)
if(!location){
    console.log('Please provide location')
}else{
    // geocode(location, (error, data) => {
    geocode(location, (error, {latitude,longitude}) => {
        if(error){
            return console.log('Error : ' +error)
        }
        console.log(location)
        //console.log('Data : latitude :' +data.latitude+', longitude : '+data.longitude)
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log('Error', error)
            }
            
            console.log('Data', forecastData)
          })
    })
}



const postmanRequest = require('postman-request')

const forcast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=a94de50a3cfc9421255fc77a94b0c600&query='+latitude+','+longitude+'&units=f'

    //postmanRequest({ url : url, json: true}, (error, response) => {
    postmanRequest({ url, json: true}, (error, {body}) => {
    
        if(error){
            console.log('Unable to connect weather service!')
        }else if(body.error){
            console.log('unable to find location')
        }else{
            console.log(body.current.weather_descriptions[0] + ', It is currently '+body.current.temperature +' degree out. It feels like '+body.current.feelslike+' degree out')
        }
        
    })
}

module.exports = forcast
const http = require('http')
const url ='http://api.weatherstack.com/current?access_key=a94de50a3cfc9421255fc77a94b0c600&query=40,-75&units=f'

const request = http.request(url, (response) => {

    let data = ''
    response.on('data', (chunk) => {
        // console.log(chunk.toString())
        data = data + chunk.toString()
    })
    response.on('end', () => {
        //console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('an error', error)
})

request.end()
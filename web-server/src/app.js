const path =require('path')
const express = require ('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forcast = require('./utils/forecast.js')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to server (express.static means your index.html)
app.use(express.static(publicDirectoryPath))
app.use(express.json())

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Vibha'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        image: '/image/me.jpeg',
        name: 'Vibha'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Vibha'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }
    const address = req.query.address
    geocode(address, (error, data) => {
        if(error){
            return res.send({error: error})//console.log('Error : '+error)
        }
        //console.log(data)
        forcast(data.latitude, data.longitude, (error, forcastData) => {
            if(error){
                return res.send({error: error})
                //return console.log('Error : '+error)
            }
            res.send({
                forcast:forcastData.des+ ', It is currently '+forcastData.tem +' degree out. It feels like '+forcastData.feelslike+' degree out',
                address : address
            });
        })
    })
    // res.send({
    //     forcast: '12 degree',
    //     location: 'Sweden',
    //     address: req.query.address
    // })
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Vibha',
        msg: 'Help article not found'
    })
})
app.get('/products', (req, res) => {
    if(!req.query.search){
       return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        product: []
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Vibha',
        msg : 'Page not found'
    })
})
app.post('/yourEndpoint', (req, res) => {
    //const { currentUrl } = req.body;
    res.send('This is node.js page.' +res)
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
const express = require('express')
const app = express()

const port =process.env.PORT || 3000

const path = require("path")
const publicDirectory = path.join(__dirname , '../public')
app.use(express.static(publicDirectory))


app.set('view engine', 'hbs');
const viewsDirectory = path.join(__dirname , '../Temp/views')
app.set('views' , viewsDirectory)

var hbs = require('hbs')

const partialsPath = path.join(__dirname , '../Temp/partials')
hbs.registerPartials(partialsPath)

const geocode = require('./APIS/geocode')
const forecast = require('./APIS/forecastFile')

app.get('/', (req, res) => {
    
    res.render('index', {
        title: "Weather Page",
        desc: "Get the current weather information"
    })
})

app.get('/weather' , (req , res) => {
    if(!req.query.address){
        return res.send({
            error:"you must provide address"
        })
    }
    geocode(req.query.address , (error , data) =>{
        if(error){
            return res.send({error})
        }
        forecast(data.latitude , data.longitude , (error , forecastData ) => {
            if(error){
                return res.send({error})
            }
            res.send({
                forcast:forecastData,
                location:req.query.address,
                latitiude:data.latitiude,
                longitude:data.longitude
            })

           
        })
    })
})

app.get('*', (req , res) =>{
    
    res.send("404 Page not Founded")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

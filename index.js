const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


// DATABASE
// const mongoose = require('mongoose')
// const URL = process.env.SCHOOLS_DATABASE_URI
// mongoose.connect(URL,()=>console.log('Database connected'))

// const schoolsModel = mongoose.model('school',{
//     name: String,
//     region: String,
//     district: String,
//     level: String,
//     religion: String,
//     sex: String,
//     status: String
// })

// SAMPLE DATA
const schools = [
    {id: 1, name: "Mvumi mission"},
    {id: 2, name: "DCT Secondary"},
    {id: 3, name: "Thaqaafa Sec"},
    {id: 4, name: "St Mary's"},
    {id: 5, name: "St Gaspar"},
    {id: 6, name: "Machame Health"},
    {id: 7, name: "KCMC Health"},
    {id: 8, name: "Arusha Technical"},
    {id: 9, name: "Ilkiurei primary"},
    {id: 10, name: "Dodoma sec"},
    {id: 11, name: "Msange secondary"},
    {id: 12, name: "Arusha tech"},
    {id: 13, name: "Muheza health"},
    {id: 14, name: "Mvumi health"},
    {id: 15, name: "Vayolence uni"},
]

const CORS_CONFIG = {
    origin: 'https://google.com'
}

// MIDDLEWARES
app.use(cors(CORS_CONFIG))
express.json()
express.urlencoded({extended: false})


// ROUTES
app.get('/', async (req, res) => {
    // const schools = await schoolsModel.find()
    // res.json(schools)
    res.json(schools)
})

// app.get('/update', async (req, res) =>{

// })

// app.post('/', async (req, res) =>{

// })

// SERVICE PORT LISTENING
const PORT = 3000
app.listen(PORT, ()=>console.log('API active on port '+ PORT))
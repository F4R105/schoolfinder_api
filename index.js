const express = require('express')
const app = express()

// DATABASE
// const mongoose = require('mongoose')
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

// ROUTES
express.json()
express.urlencoded({extended: false})

app.get('/', async (req, res) => {
    // const schools = await schoolsModel.find()
    // res.json(schools)
    res.json(schools)
})

// app.get('/update', async (req, res) =>{

// })

// app.post('/', async (req, res) =>{

// })

const PORT = 3000
app.listen(PORT, ()=>console.log('API active on port '+ PORT))
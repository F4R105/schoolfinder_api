const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// SAMPLE DATA
const schools = require('./sample_schools') 

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

const CORS_CONFIG = {
    origin: '*'
}

// MIDDLEWARES
app.set('view engine', 'ejs')
app.use(cors(CORS_CONFIG))
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


// ROUTES
const userRoutes = require('./routes/user_routes')
app.use('/', userRoutes)

app.get('/schools', async (req, res) => {
    // const schools = await schoolsModel.find()
    // res.json(schools)
    res.json(schools)
})

// app.get('/update', async (req, res) =>{

// })

// app.post('/', async (req, res) =>{

// })

// SERVICE PORT LISTENING
const PORT = 4000
app.listen(PORT, ()=>console.log('API active on port '+ PORT))
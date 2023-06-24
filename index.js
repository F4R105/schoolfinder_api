const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()
require('./database')

// CONFIGURATION
const CORS_CONFIG = {
    origin: '*'
}

// MIDDLEWARES
app.use(helmet())
app.set('view engine', 'ejs')
app.use(cors(CORS_CONFIG))
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

// SAMPLE DATA
// const schools = require('./sample_schools') 

// ROUTES
// const userRoutes = require('./routes/user_routes')
const adminRoutes = require('./routes/admin_routes')
const apiRoutes = require('./routes/api_routes')

// app.use('/', userRoutes)
app.use('/', apiRoutes)
app.use('/admin', adminRoutes)

app.listen(process.env.SERVER_PORT, ()=>console.log('API active on port '+ process.env.SERVER_PORT))
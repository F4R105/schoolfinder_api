// DATABASE
const mongoose = require('mongoose')
const URL = process.env.SCHOOLS_DATABASE_URI

// MODELS
const schoolModel = require('./models/SchoolModel')

const database = mongoose.connect(URL)
.then(conn=>{
    console.log('SchoolFinder Database connected')
    return conn
})
.catch(err=>console.log('Failed to connect to Database', err))

module.exports = database
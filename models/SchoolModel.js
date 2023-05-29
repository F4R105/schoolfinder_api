const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    region: String
})

const categoriesSchema = mongoose.Schema({
    level: String,
    religion: String,
    gender: String,
    ownership: String,
    location: locationSchema,
})

const contactsSchema = mongoose.Schema({
    phone: String,
    email: String,
    website: String,
    socials: Array
})

const schoolSchema = mongoose.Schema({
    name: String,
    description: String,
    images: Array,
    contacts: contactsSchema,
    results: Array,
    category: categoriesSchema
})

const PrimarySchool = mongoose.model('primary school', schoolSchema)
const SecondarySchool = mongoose.model('secondary school', schoolSchema)
const AdvancedSchool = mongoose.model('advanced school', schoolSchema)

module.exports = {PrimarySchool, SecondarySchool, AdvancedSchool}
const { Router } = require('express')
const router = Router()

// res.json(updatedSchool)
// MODULES
const {PrimarySchool, SecondarySchool, AdvancedSchool} = require('../models/SchoolModel')

router.get('/primary', async (req, res)=>{

    const page = req.query.page || 0
    const schoolsPerRequest = 20

    try{
        const schools = await PrimarySchool.find({}).skip(page * schoolsPerRequest).limit(schoolsPerRequest)
        res.json(schools)
    }catch(error){
        console.log(error.message)
    }
})

router.get('/secondary', async (req, res)=>{

    const page = req.query.page || 0
    const schoolsPerRequest = 20

    try{
        const schools = await SecondarySchool.find({}).skip(page * schoolsPerRequest).limit(schoolsPerRequest)
        res.json(schools)
    }catch(error){
        console.log(error.message)
    }
})

router.get('/advanced', async (req, res)=>{

    const page = req.query.page || 0
    const schoolsPerRequest = 20
    
    try{
        const schools = await AdvancedSchool.find({}).skip(page * schoolsPerRequest).limit(schoolsPerRequest)
        res.json(schools)
    }catch(error){
        console.log(error.message)
    }
})

router.post('/filter', async (req, res) => {
    const request = req.body.query
    const filterObject = {
        "category.level": request.level,
        "category.religion": request.religion,
        "category.gender": request.gender,
        "category.ownership": request.ownership,
        "category.occupation": request.occupation,
        "category.school_fee": request.fee,
    }

    try{
        const pri = await PrimarySchool.find(filterObject).limit(20)
        const sec = await SecondarySchool.find(filterObject).limit(20)
        const adv = await AdvancedSchool.find(filterObject).limit(20)
        res.json([...pri,...sec,...adv])
    }catch(err){
        console.log(err.message)
    }
})

router.post('/search', async (req, res) => {
    try{
        const pri = await PrimarySchool.find({$text: {$search: req.body.query}}).limit(20)
        const sec = await SecondarySchool.find({$text: {$search: req.body.query}}).limit(20)
        const adv = await AdvancedSchool.find({$text: {$search: req.body.query}}).limit(20)
        res.json([...pri,...sec,...adv])
    }catch(err){
        console.log(err.message)
    }
})

module.exports = router
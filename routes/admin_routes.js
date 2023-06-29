const { Router } = require('express')
const router = Router()

// MODULES
const {PrimarySchool, SecondarySchool, AdvancedSchool} = require('../models/SchoolModel')

// POST ROUTES
router.post('/add', async (req, res) => {
    try{
        const newSchool = new schoolModel(req.body)
        const addedSchool = await newSchool.save()
        res.json(addedSchool)
    }catch(err){
        console.log(err.message)
        res.json({error: err})
    }

})

router.post('/edit', async (req, res) => {
    res.send('register logic')
})

router.post('/delete', async (req, res) => {
    res.send('request reset code login')
})

router.post('/update', async(req, res) => {
    try {
        const schoolLevel = req.body.category.level

        if(schoolLevel == "primary"){
            const newSchool = await PrimarySchool.updateOne({_id: "6458081c50aeca039e310ddb"}, req.body)
            res.json(newSchool)
        }

        if(schoolLevel == "secondary"){
            const newSchool = await SecondarySchool.updateOne({_id: "6458081c50aeca039e310ddb"}, req.body)
            res.json(newSchool)
        }

        if(schoolLevel == "advanced"){
            const newSchool = await AdvancedSchool.updateOne({_id: "6458081c50aeca039e310ddb"}, req.body)
            res.json(newSchool)
        }

    }catch(err){
        console.log(err.message)
        res.json({error: err})
    }
})

// {
//     "_id": "6458081c50aeca039e310ddb",
//     "school_id": "PS0101114",
//     "name": "ALBEHIJE PRIMARY SCHOOL",
//     "description": "",
//     "images": [],
//     "contacts": {
//         "phone": "",
//         "mailbox": "",
//         "email": "",
//         "website": "",
//         "socials": [],
//         "_id": "646667c8f59cfa855045b1d9"
//     },
//     "results": [
//         {
//             "year": 2022,
//             "grades": {
//                 "A": "19",
//                 "B": "2",
//                 "C": "0",
//                 "D": "0",
//                 "E": "0"
//             }
//         }
//     ],
//     "category": {
//         "level": "primary",
//         "religion": "",
//         "gender": "",
//         "ownership": "",
//         "occupation": "",
//         "school_fee": "",
//         "location": {
//             "region": "ARUSHA",
//             "district": "ARUSHA"
//         }
//     }
// }

module.exports = router
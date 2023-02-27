const { Router } = require('express')
const router = Router()

// GET REQUESTS

router.get('/', async (req, res) => {
    res.render('index')
})

router.get('/login', async (req, res) => {
    res.render('login')
})

router.get('/logout', async (req, res) => {
    res.render('index')
})

router.get('/register', async (req, res) => {
    res.render('register')
})

router.get('/request_reset_code', async (req, res) => {
    res.render('request_reset_code')
})

router.get('/reset', async (req, res) => {
    res.render('reset_password')
})


// POST ROUTES

router.post('/login', async (req, res) => {
    res.render('user_account',{ username: 'halla halla'})
})

router.post('/register', async (req, res) => {
    res.send('register logic')
})

router.post('/request_reset_code', async (req, res) => {
    res.send('request reset code login')
})

router.post('/reset', async (req, res) => {
    res.send('reset password logic')
})

module.exports = router
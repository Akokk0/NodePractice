const express = require('express')

const router = express.Router()

router.get('/user/list', (req, res) => {

    res.send('Get all user list')

})

router.post('/user/add', (req, res) => {

    res.send('Add a new user')

})

module.exports = router
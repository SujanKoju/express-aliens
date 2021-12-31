const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('... Get Request Called ...')
    res.send('Hello Aliens')
})

module.exports = router

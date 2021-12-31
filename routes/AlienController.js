const express = require('express')
const router = express.Router()

const Alien = require('../models/Alien')

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.send('Error ' + err)
    }
})
router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const savedAlien = await Alien.create(alien)
        res.json(savedAlien)
    } catch (err) {
        res.send('Error')
    }
})
module.exports = router

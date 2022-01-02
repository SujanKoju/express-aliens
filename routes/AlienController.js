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

router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (err) {
        res.send('Alien with the id not found . ' + err)
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

router.patch('/:id', async (req, res) => {
    try {
        const alienById = await Alien.findById(req.params.id);
        alienById.sub = req.body.sub
        await alienById.update(alienById)
        res.json(alienById)
    } catch (e) {
        res.send(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const alienById = await Alien.findById(req.params.id);
        await alienById.deleteOne(alienById)
    } catch (e) {
        res.send(e)
    }
})
module.exports = router



const express = require('express')
const router = express.Router()
const Vidli = require('../models/vidli')

// Get All
router.get('/', async (req, res)=> {
    try {
        const vidli = await Vidli.find()
        res.json(vidli)
    } 
    catch(err) {
        res.status(500).json({message: err.message})
    }
})

// Get One
router.get('/:id', getVdo, (req, res)=> {
    res.send(res.vdo);
})

// Create One
router.post('/', async (req, res)=> {
    const video = new Vidli({
        video_provider: req.body.video_provider,
        video_url: req.body.video_url,
        favorited: req.body.favorited,
        video_status: req.body.video_status
    })

    try {
        const newVidli = await video.save()
        res.status(201).json(newVidli)
    } catch (err) {
        re.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getVdo, async (req, res)=> {
    if(req.body.favorited != null) {
        res.vdo.favorited = req.body.favorited
    }
    if(req.body.video_status != null) {
        res.vdo.video_status = req.body.video_status
    }

    try {
        const updatedVidli = await res.vdo.save()
        res.json(updatedVidli)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getVdo, async (req, res)=> {
    try {
        await res.vdo.remove()
        res.json({ message: 'Video Removed'})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

async function getVdo(req, res, next) {
    let vdo
    try {
        vdo = await Vidli.findById(req.params.id)
        if(vdo == null) {
            return res.status(404).json({message: ' Cannot find the video' }) //Couldn't find anything
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.vdo = vdo
    next()
}

module.exports = router
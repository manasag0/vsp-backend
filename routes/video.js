const express = require('express');
const router = express.Router()
const video = require("../Models/video")
const validate = require("../validate/validation")

router.post("/upload", validate, async (req, res) => {
    console.log(req.body)
    try {
        const data = await new video({ ...req.body, userid: req.userid })
        await data.save()
        response.status(200).json({
            status: "saved successfully"
        })

    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
})

router.get('/home', async (req, res) => {
    try {
        const data = await video.find()
        res.status(200).json(data)
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.get('/myvideos', validate, async (req, resp) => {
    try {
        const data = await video.find({ userid: req.userid })
        console.log(data);
        resp.status(200).json(data)
    } catch (err) {
        resp.json({ message: err.message })
    }
})

router.delete('/myvideos/:id', async (req, resp) => {
    try {
        const data = await video.findByIdAndDelete(req.params.id);
        resp.status(200).json({ message: 'data deleted succefully' })
    } catch (err) {
        resp.json({ message: err.message })
    }
})
module.exports = router;


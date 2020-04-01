const express = require("express")
const router = express.Router()

const { saveData, saveLocation } = require("../serverJS/savedata")

router.post("/", (req, res) => {
    let data = req.body
    saveData(data, e => {
        if (e) res.json(true)
        else res.json(false)
    })
})
router.post("/saveLocation", (req, res) => {
    let details = req.body
    saveLocation(details, e => {
        if (e) res.json(true)
        else res.json(false)
    })
})
router.get("/getAll", (req, res) => {
    res.json(false)
})
router.get("/getNearby", (req, res) => {
    let { device_id } = req.body
    
})
router.get("/get/:device_id", (req, res) => {})

module.exports = router

const express = require("express")

const router = express.Router()

const _key = require("../serverJS/randomKey")

const { signup, login } = require("../serverJS/auth")

router.post("/login", (req, res) => {
    const token = req.body
    login(token, e => {
        if (e) {
            res.json({ login: true })
        } else {
            res.json({ login: false })
        }
    })
})

router.get("/signup", (req, res) => {
    let token = _key()
    signup(token, req, data => {
        if (data.signup) {
            res.json({ signup: true, token })
        } else {
            res.json({ signup: false, token })
        }
    })
})

module.exports = router

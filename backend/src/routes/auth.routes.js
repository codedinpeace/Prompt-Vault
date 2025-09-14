const express = require('express')
const router = express.Router()
const {signup, login, logout, check} = require('../controllers/auth.controller')

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/check", check)

module.exports = router
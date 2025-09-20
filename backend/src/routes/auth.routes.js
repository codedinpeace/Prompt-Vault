const express = require('express')
const router = express.Router()
const {signup, login, logout, check, findOwner} = require('../controllers/auth.controller')
const protectedRouteMiddleware = require('../middleware/route-protection.middleware')

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/check", protectedRouteMiddleware, check)
router.get("/findOwner", protectedRouteMiddleware, findOwner)


module.exports = router
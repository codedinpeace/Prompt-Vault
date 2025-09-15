const express = require('express')
const protectedRouteMiddleware = require('../middleware/route-protection.middleware')
const router = express.Router()
const {createPrompt,deletePrompt,getPrompt} = require('../controllers/prompt.controller')

router.post("/create-prompt", protectedRouteMiddleware, createPrompt)
router.post("/delete-prompt",protectedRouteMiddleware, deletePrompt)
router.get("/prompt/:id",protectedRouteMiddleware, getPrompt)

module.exports = router
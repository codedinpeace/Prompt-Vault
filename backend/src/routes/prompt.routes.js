const express = require('express')
const protectedRouteMiddleware = require('../middleware/route-protection.middleware')
const router = express.Router()
const {createPrompt,deletePrompt,getPrompt, categoryPrompt} = require('../controllers/prompt.controller')

router.post("/create-prompt", protectedRouteMiddleware, createPrompt)
router.post("/delete-prompt/:id",protectedRouteMiddleware, deletePrompt)
router.get("/prompt/:id",protectedRouteMiddleware, getPrompt)
router.post("get-prompt-by-category", protectedRouteMiddleware, categoryPrompt)

module.exports = router
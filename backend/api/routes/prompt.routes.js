const express = require('express')
const protectedRouteMiddleware = require('../middleware/route-protection.middleware')
const router = express.Router()
const {createPrompt,deletePrompt,getPrompt, categoryPrompt, getCommunityPrompts} = require('../controllers/prompt.controller')

router.post("/create-prompt", protectedRouteMiddleware, createPrompt)
router.post("/delete-prompt/:id",protectedRouteMiddleware, deletePrompt)
router.get("/prompt/:id",protectedRouteMiddleware, getPrompt)
router.post("get-prompt-by-category", protectedRouteMiddleware, categoryPrompt)
router.get("/get-community-prompts", protectedRouteMiddleware, getCommunityPrompts)

module.exports = router
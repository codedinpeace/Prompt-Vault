const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const protectedRouteMiddleware = async (req,res,next) =>{
    try {
        const token = req.cookies.token
        if(!token) return res.status(401).json({message:"Invalid Token"})
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY_GENERATOR)
        const user = await userModel.findById(decoded.userId)
        req.user = user
        next()
    } catch (error) {
        res.status(400).json({message:"something went wrong"})
        console.log(error)
    }
}

module.exports = protectedRouteMiddleware
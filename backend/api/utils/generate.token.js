const jwt = require('jsonwebtoken')

const genToken = (userId, res)=>{
    try {
        const token =  jwt.sign({userId}, process.env.JWT_SECRET_KEY_GENERATOR, {expiresIn:"1d"})
        res.cookie("token", token)
        return token
    } catch (error) {
        res.status(400).json({message:"Something went wrong while creating the token"})
    }
}

module.exports = genToken   
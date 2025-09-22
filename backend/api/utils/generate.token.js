const jwt = require('jsonwebtoken')

const genToken = (userId, res)=>{
    try {
        const token =  jwt.sign({userId}, process.env.JWT_SECRET_KEY_GENERATOR, {expiresIn:"1d"})
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: false,    // only sent over HTTPS
            sameSite: "Lax", // allows cross-site requests
            maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
          });
        return token
    } catch (error) {
        res.status(400).json({message:"Something went wrong while creating the token"})
    }
}

module.exports = genToken   
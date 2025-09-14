const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.routes')
require('dotenv').config()
const connectDB = require('./utils/mongoose.connection')
connectDB()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)

app.get("/", (req,res)=>{
    res.send("Hello World")
})

module.exports = app
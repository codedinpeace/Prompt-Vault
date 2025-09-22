const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const authRoutes = require('./routes/auth.routes')
const promptRoutes = require('./routes/prompt.routes')
const cors = require("cors");

require('dotenv').config()
const connectDB = require('./utils/mongoose.connection')
connectDB()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"https://prompt-vault-frontend-2.vercel.app",
    credentials:true,
}));
app.use("/api/auth", authRoutes)
app.use("/api", promptRoutes)

app.get("/", (req,res)=>{
    res.send("Hello World") 
})

module.exports = app
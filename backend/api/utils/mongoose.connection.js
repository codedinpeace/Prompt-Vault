const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
        console.log("DataBase Connected Successfully")
    } catch (error) {
        console.log(`Something went wrong\n ${error}`)
    }
}

module.exports = connectDB
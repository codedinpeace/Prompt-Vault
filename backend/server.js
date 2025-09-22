const app = require('./src/index')


app.listen(process.env.SERVER_STARTING_PORT, ()=>{
    console.log("Server successfully running on Port :", process.env.SERVER_STARTING_PORT)
})
const app = require('./src/app')


app.listen(process.env.SERVER_STARTING_PORT, ()=>{
    console.log("Server successfully running")
})
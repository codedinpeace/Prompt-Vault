const app = require('./src/app')
const cors = require("cors");
app.use(cors());

app.listen(process.env.SERVER_STARTING_PORT, ()=>{
    console.log("Server successfully running")
})
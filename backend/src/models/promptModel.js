const mongoose = require('mongoose')

const promptSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    prompt:{
        type:String,
        required:true
    },
    visibility:{
        type:String,
        default:"public",
        enum: ["public", "private", "Public", "Private"]
    },
    tags:[{
        type:String,
    }],
    category:{
        type:String,
        default:"Uncategorized",
    },
    owner:{type:String, ref:"User"}
}, {timestamps:true})

module.exports = mongoose.model("Prompt", promptSchema)
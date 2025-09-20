const promptModel = require('../models/promptModel')
const userModel = require('../models/userModel')
const categorizePrompt = require('../service/Ai.services')

const createPrompt = async (req,res)=>{
    const {title, prompt, visibility, tags} = req.body
    try {
        const owner = await userModel.findOne(req.user._id)
        const createdPrompt = await promptModel.create({
            title,
            prompt,
            visibility,
            tags,
            owner,
            category:await categorizePrompt(prompt)
        })

        // if(createdPrompt.visibility==="Private"){   
        //     return res.status(200).json({message:"Prompt created Privately", privatePrompt:createdPrompt})
        // }
        
        res.status(200).json({message:"Prompt created Publicly", createdPrompt})
    } catch (error) {
        res.status(400).json({message:"Something went wrong while creating the prompt"})
        console.log(error)
    }
}
const deletePrompt = async (req,res)=>{
    const {id} = req.params
    try {
        const deletedPrompt = await promptModel.findOneAndDelete({_id:id})
        res.status(200).json({message:"Prompt deleted successfully", deletedPrompt})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
    }
}
const getPrompt = async (req,res)=>{
    const {id} = req.params
    try {
        const prompt = await promptModel.findOne({_id:id})
        if(!prompt) return res.status(404).json({message:"Prompt doesn't exist"})
            res.status(200).json(prompt)
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}


const categoryPrompt = async (req,res)=>{
    const {category} = req.body
    try {
        const categorizedPrompt = await promptModel.find({category})
        res.status(200).json(categorizedPrompt)
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
    }
}
module.exports = {createPrompt,deletePrompt,getPrompt, categoryPrompt}
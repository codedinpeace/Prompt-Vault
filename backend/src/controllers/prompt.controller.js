const promptModel = require('../models/promptModel')

const createPrompt = async (req,res)=>{
    const {title, prompt, visibility, tags} = req.body
    try {
        const owner = req.user._id
        const createdPrompt = await promptModel.create({
            title,
            prompt,
            visibility,
            tags,
            owner,
        })

        if(createdPrompt.visibility==="private"){
            await promptModel.findOne({owner})
            res.status(200).json({message:"Prompt created Privately", createdPrompt})
        }
        
        res.status(200).json({message:"Prompt created Publicly"})
    } catch (error) {
        res.status(400).json({message:"Something went wrong while creating the prompt"})
    }
}
const deletePrompt = async (req,res)=>{

}
const getPrompt = async (req,res)=>{

}

module.exports = {createPrompt,deletePrompt,getPrompt}
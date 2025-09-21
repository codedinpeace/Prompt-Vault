import React, { useEffect } from 'react'
import { usePromptStore } from '../States/PromptState'
import { Link, useParams } from 'react-router-dom'

const Community = () => {

  const {communityPromptsFunction, isFetchingPrompts, communityPrompts} = usePromptStore()
  const {name} = useParams()

  useEffect(()=>{
    communityPromptsFunction()
  }, [])

  useEffect(()=>{
      
  }, [communityPrompts, name])

  const categories = [
    "All Prompts",
    "Content Writing",
    "Code Generation",
    "Data Analysis",
    "Creative Writing",
    "Marketing",
    "Research",
    "Education",
    "Business",
  ];

  if(!communityPrompts)return(
    <div className="mt-120 w-full gap-x-2 flex justify-center items-center">
    <div
      className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
    ></div>
    <div
      className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
    ></div>
    <div
      className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
    ></div>
  </div>
  )

  if(isFetchingPrompts) return(
    <div className="mt-120 w-full gap-x-2 flex justify-center items-center">
    <div
      className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
    ></div>
    <div
      className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
    ></div>
    <div
      className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
    ></div>
  </div>
  )

  return (
    <div className='flex justify-center mt-10 flex-col items-center underline'>
      <h1 className='text-3xl text-gray-700 font-semibold'>PromptVault Community</h1>
      <p className='text-xl opacity-70 mt-1'>Here you will find prompts posted by prompting experts</p>
      <div>
      <div className='flex justify-center flex-wrap max-sm:gap-5 mt-10 gap-10'>
       {categories.map((category)=>(
        <Link to={`/category/${category}`}>
         <button className='text-sm bg-[#9e92e8] px-3 py-1 rounded-full border-1 border-[#9e92e8] hover:bg-transparent hover:text-black cursor-pointer  text-white font-medium active:scale-90 transition-all duration-300'>{category}</button>
        </Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Community
import React, {useState, useEffect } from 'react'
import { useAuthStore } from '../States/AuthStore'
import { Link } from 'react-router-dom'
import { Copy } from 'lucide-react'
import { usePromptStore } from '../States/PromptState'
import toast from 'react-hot-toast'

const DashBoard = () => {

  const {Prompts, findOwner} = usePromptStore()
  function copy (){
    navigator.clipboard.writeText(Prompts.map((prompt)=>prompt.prompt).join("\n"))
    .then(()=>{
      toast.success("Text copied to clipboard")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const {authUser} = useAuthStore()
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

  return (
    <div>
      <div className='flex items-end justify-around bg-[#f1f1f1] p-10 max-sm:flex-col max-sm:items-center py-5 pb-10'>
        <div className='flex flex-col  mt-10'>
          <h1 className='text-3xl font-medium max-sm:text-2xl max-sm:mx-auto'>{authUser.name.split(" ")[0]}'s Dashboard</h1>
          <p className='text-xl opacity-70 max-sm:text-lg font-medium max-sm:mx-auto'>This is where all your prompts will be shown </p>
        </div>
        <div>
        <Link to="/add-prompt"><button className='text-lg max-sm:text-[16px] max-sm:mt-3 bg-[#9E92E8] px-7 py-2 rounded-md hover:bg-white border-1 border-[#9E92E8] hover:text-black transition-all duration-150 cursor-pointer hover:shadow-xl text-white font-semibold text-center'>+ Add Prompt</button></Link>
        </div>
      </div>
      <div >
        <div className='flex justify-around mt-10'>
      <h1 className='text-3xl font-medium'>Prompts </h1>
      <Link className='text-[#9392e8] hover:underline text-2xl font-medium' to="/community">Community</Link>
        </div>
      <div className='flex justify-center flex-wrap max-sm:gap-5 mt-10 gap-10'>
       {categories.map((category)=>(
        <Link to={`/category/${category}`}>
         <button className='text-sm bg-[#9e92e8] px-3 py-1 rounded-full border-1 border-[#9e92e8] hover:bg-transparent hover:text-black cursor-pointer  text-white font-medium active:scale-90 transition-all duration-300'>{category}</button>
        </Link>
        ))}
      </div>
        </div>
        <div>
          <div className='flex justify-center gap-5 flex-wrap'>
      {Prompts.map((prompt)=>(
            <div key={prompt._id} className="promptCard1 mt-15   border-1 border-zinc-300 p-8 pb-6 rounded-md shadow-xl">
            <h3 className='inline-block text-sm  bg-[#9d92e87c] px-3 py-1 rounded-full border-1 border-[#9e92e8] cursor-pointer  text-black font-medium'>{prompt.category}</h3> 
              <h2 className='text-2xl font-medium mt-4'>{prompt.title}</h2>
              <p className='opacity-70 max-w-md mt-2 max-sm:max-w-sm'>{prompt.prompt.length > 100 ? prompt.prompt.slice(0,100) +"....." : prompt.prompt}</p>
              <div className='flex gap-2'>
             {prompt.tags.map((tag)=>(
               <h3 className='inline-block text-sm mt-4 px-3 py-1 rounded-full border-1 border-[#9e92e8] cursor-pointer  text-black font-medium'>{tag}</h3>
             ))}
              </div>
              <div className='flex justify-between'>
              <p className='text-[14px] mt-4 opacity-50'>by {prompt.owner.name}</p>
              <p className='text-[14px] mt-4 opacity-50'>{prompt.createdAt.split("T")[0]}</p> 
              </div>
              <div className='flex items-end mt-4 gap-2'>
                <div className='ml-auto flex gap-2'>
                <Copy onClick={copy} className='cursor-pointer hover:opacity-70'/> <p className='opacity-70'>copy</p>
                </div>
              </div>
          </div>
      ))}
          
          </div>
        </div>
    </div>  
  )
}

export default DashBoard
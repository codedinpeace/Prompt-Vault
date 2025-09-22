import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { usePromptStore } from '../States/PromptState'
import { Copy, Plus } from 'lucide-react'
import toast from 'react-hot-toast'

const Community = () => {
  const { name } = useParams()
  const { communityPromptsFunction, communityPrompts, isFetchingPrompts } = usePromptStore()

  useEffect(() => {
    communityPromptsFunction().then(() => {
      console.log("Community Prompts:", communityPrompts);
    });
  }, []);


  const copyText = (text) => {
    if (!text) return
    navigator.clipboard.writeText(text)
      .then(() => toast.success("Text copied to clipboard"))
      .catch(err => console.log(err))
  }

  if (isFetchingPrompts) {
    return (
      <div className="mt-120 w-full gap-x-2 flex justify-center items-center">
        <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"></div>
        <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
        <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"></div>
      </div>
    )
  }

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
    <>
    
    <div className="flex justify-center mt-10 flex-col items-center underline">  <h1 className="text-3xl text-gray-700 font-semibold">  PromptVault Community  </h1> <p className="text-xl opacity-70 mt-1"> Here you will find prompts posted by prompting experts  </p>
    </div>
    <div className="px-5">
      <div className="flex justify-center mt-10">
        <h1 className="text-3xl font-medium">{name}</h1>
      </div>

      <div className="flex justify-center flex-wrap mt-10 gap-10">
        {categories.map(category => (
          <Link key={category} to={`/community/category/${category}`}>
            <button className="text-sm bg-[#9e92e8] px-3 py-1 rounded-full border-1 border-[#9e92e8] hover:bg-transparent hover:text-black cursor-pointer text-white font-medium active:scale-90 transition-all duration-300">
              {category}
            </button>
          </Link>
        ))}
      </div>

      <div className="flex justify-center flex-wrap mt-10 gap-10">
        {communityPrompts.map(prompt => (
          <div key={prompt._id} className="promptCard1 mt-15 border-1 border-zinc-300 p-8 pb-6 rounded-md shadow-xl">
            <h3 className="inline-block text-sm bg-[#9d92e87c] px-3 py-1 rounded-full border-1 border-[#9e92e8] cursor-pointer text-black font-medium">
              {prompt.category || "Uncategorized"}
            </h3>
            <h2 className="text-2xl font-medium mt-4">{prompt.title || "Untitled"}</h2>
            <p className="opacity-70 max-w-md max-sm:max-w-sm mt-2">
              {prompt.prompt?.length > 100
                ? prompt.prompt.slice(0, 100) + "....."
                : prompt.prompt || ""}
            </p>

            <div className="flex gap-2 mt-4">
              {prompt.tags?.map(tag => (
                <h3 key={tag} className="inline-block text-sm px-3 py-1 rounded-full border-1 border-[#9e92e8] text-black font-medium">
                  {tag}
                </h3>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <p className="text-[14px] opacity-50">by {prompt.owner?.name || "Unknown"}</p>
              <p className="text-[14px] opacity-50">{prompt.createdAt?.split("T")[0] || ""}</p>
            </div>

            <div className="flex items-end mt-4 gap-2">
              <div className="ml-auto flex gap-2">
                <Copy onClick={() => copyText(prompt.prompt)} className="cursor-pointer hover:opacity-70" />
                <p className="opacity-70">copy</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Community

import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { Copy, Plus } from 'lucide-react'
import { usePromptStore } from '../States/PromptState'

const CommunityCategory = () => {
  const {comname} = useParams()
  const [filteredItems, setFilteredItems, isFetchingPrompts] = useState([])
  const {communityPrompts} = usePromptStore()

  useEffect(()=>{
    const filtered = communityPrompts.filter(prompt=>prompt.category.includes(comname))
    setFilteredItems(filtered)
  }, [comname, communityPrompts])

  function copy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Text copied to clipboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

    if (filteredItems.length === 0)
      return (
        <div className="bg-[#9089e5] h-[92.5vh]">
          <div className="flex justify-center flex-col items-center align-middle">
            <h1 className="text-3xl font-semibold mb-5 opacity-30 mt-80 max-sm:text-2xl">
              No Prompts in this Category..... :({" "}
            </h1>
            <Link
              to="/add-prompt"
              className="button flex text-md items-center group  bg-zinc-100 px-6 py-2 rounded-md border-1 border-zinc-300"
            >
              <Plus className="group-hover:rotate-360 transition-all duration-2000 group-hover:scale-105 " />
              Add Prompt
            </Link>
          </div>
        </div>
      );
    

  const categories = [
    "Content Writing",
    "Code Generation",
    "Data Analysis",
    "Creative Writing",
    "Marketing",
    "Research",
    "Education",
    "Business",
  ];

  function something (){
    console.log(filteredItems)
  }
  
  
  

  return (
    <div>
      <div className="flex justify-center mt-10">
        <h3 className="text-3xl font-medium">{comname}</h3>
      </div>
      <div className='flex justify-center flex-wrap max-sm:gap-5 mt-10 gap-10'>
          {/* <Link>
         <button onClick={()=>{setIsTrue(true)}} className='text-sm bg-[#9e92e8] px-3 py-1 rounded-full border-1 border-[#9e92e8] hover:bg-transparent hover:text-black cursor-pointer  text-white font-medium active:scale-90 transition-all duration-300'>All Prompts</button>
        </Link> */}
       {categories.map((category, idx)=>(
        <div key={idx}>
        <Link  to={`/community/category/${category}`}>
         <button onClick={something} className='text-sm bg-[#9e92e8] px-3 py-1 rounded-full border-1 border-[#9e92e8] hover:bg-transparent hover:text-black cursor-pointer  text-white font-medium active:scale-90 transition-all duration-300'>{category}</button>
        </Link>
        </div>
        ))}
      </div>
      <div className="flex justify-center w-full gap-10 flex-wrap">
        
        {filteredItems.map((filteredItem) => (
          <div key={filteredItem._id} className="">
            <div
              
              className="promptCard1  mt-10  border-1 border-zinc-300 p-8  pb-6 rounded-md shadow-xl"
            >
              <h3 className="inline-block text-sm  bg-[#9d92e87c] px-3 py-1 rounded-full border-1 border-[#9e92e8] cursor-pointer  text-black font-medium">
                {filteredItem.category}
              </h3>
              <h2 className="text-2xl font-medium mt-4">
                {filteredItem.title}
              </h2>
              <p className="opacity-70 max-w-md max-sm:max-w-sm mt-2">
                {filteredItem.prompt.length > 100
                  ? filteredItem.prompt.slice(0, 100) + "....."
                  : filteredItem.prompt}
              </p>
              <div className="flex gap-2">
                <h3 className="inline-block text-sm mt-4 px-3 py-1 rounded-full border-1 border-[#9e92e8] cursor-pointer  text-black font-medium">
                  Category
                </h3>
                <h3 className="inline-block text-sm mt-4 px-3 py-1 rounded-full border-1 border-[#9e92e8] cursor-pointer  text-black font-medium">
                  Business
                </h3>
                <h3 className="inline-block text-sm mt-4 px-3 py-1 rounded-full border-1 border-[#9e92e8] cursor-pointer  text-black font-medium">
                  Writing
                </h3>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] mt-4 opacity-50">
                  by {filteredItem.owner.name}
                </p>
                <p className="text-[14px] mt-4 opacity-50">
                  {filteredItem.createdAt.split("T")[0]}
                </p>
              </div>
              <div className="flex items-end mt-4 gap-2">
                <div className="ml-auto flex gap-2">
                  <Copy
                    onClick={() => {
                      copy(filteredItem.prompt);
                    }}
                    className="cursor-pointer hover:opacity-70"
                  />{" "}
                  <p className="opacity-70">copy</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunityCategory
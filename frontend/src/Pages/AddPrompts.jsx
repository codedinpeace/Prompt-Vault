import React, { useEffect, useState } from "react";
import { usePromptStore } from "../States/PromptState";


const AddPrompts = () => {
  const [tags, setTags] = useState([]);
  const [result, setResult] = useState("Submit")
  const [tagInput, setTagInput] = useState("");
  const [prompt, setPrompt] = useState({
    title:"",
    prompt:"",
    tag:[],
    visibility:""
  })
  const {addPrompts, isAddingPrompt} = usePromptStore()

  useEffect(()=>{
    if(isAddingPrompt){
      setResult("Submitting.....")
    }
  }, [isAddingPrompt])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
      setPrompt((prev)=>({...prev, tag:[...prev.tag, e.target.value]}))
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };


  function handleTitleChange (e){
    e.preventDefault()
    setPrompt((prev)=>({...prev, title:e.target.value}))
  }

  function handlePromptChange (e){
    e.preventDefault()
    setPrompt((prev)=>({...prev, prompt:e.target.value}))
  }

  function handleVisibilityChange (e){
    setPrompt((prev)=>({...prev, visibility:e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    addPrompts(prompt)
  }

  // console.log(prompt.tag)

  return (
    <div className="max-w-3xl mx-auto p-4 ">

      <div>
        <h1 className="text-3xl font-medium mt-10 underline">Create Prompt</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
        {/* Title */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            onChange={handleTitleChange}
            placeholder="Enter title"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Flex row: Visibility & Tags */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Visibility Dropdown */}
          <div className="flex-1 flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Visibility</label>
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" onChange={handleVisibilityChange}>
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            </select>
          </div>

          {/* Tags Chip Input */}
          <div className="flex-1 flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Tags</label>
            <div className="flex flex-wrap gap-2 border rounded-md p-2 min-h-[44px] items-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full flex items-center gap-1"
                >
                  {tag}
                  <button
                    type="button"
                    className="text-indigo-600 font-bold"
                    onClick={() => removeTag(tag)}
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => {setTagInput(e.target.value)}}
                onKeyDown={handleKeyDown} 
                placeholder="Type and press enter..."
                className="flex-1 border-none focus:ring-0 focus:outline-none min-w-[120px]"
              />
            </div>
          </div>
        </div>

        {/* Prompt TextArea */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Prompt</label>
          <textarea
            rows="6"
            onChange={handlePromptChange}
            placeholder="Write your prompt here..."
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#9e92e8] text-white font-medium py-2 px-4 rounded-md hover:opacity-90 transition"
        >
          {result}
        </button>
      </form>
    </div>
  );
};
export default AddPrompts
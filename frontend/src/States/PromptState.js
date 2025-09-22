import { create } from 'zustand'
import { axiosInstance } from '../Utils/axios'
import { toast } from 'react-hot-toast'

export const usePromptStore = create((set, get) => ({
  Prompts: JSON.parse(localStorage.getItem("Prompts")) || [],
  isAddingPrompt: false,
  owner: null,
  communityPrompts: [],
  isFetchingPrompts: false,
  isAllPromptsVisibile:true,

  addPrompts: async (data) => {
    set({ isAddingPrompt: true })
    try {
      const response = await axiosInstance.post("/create-prompt", data)
      set((state) => {
        const newPrompts = [...state.Prompts, response.data.createdPrompt]
        localStorage.setItem("Prompts", JSON.stringify(newPrompts))
        return { Prompts: newPrompts, isAddingPrompt: false }
      })
      toast.success("Prompt created successfully")
    } catch (error) {
      set({ isAddingPrompt: false })
      toast.error("Something went wrong")
      console.log(error)
    }
  },

  communityPromptsFunction: async () => {
    set({ isFetchingPrompts: true })
    try {
      const response = await axiosInstance.get("/get-community-prompts")
      set({
        communityPrompts: Array.isArray(response.data) ? response.data : [],
        isFetchingPrompts: false
      })
      console.log(response.data)
    } catch (error) {
      set({ isFetchingPrompts: false })
      toast.error("Something went wrong")
      console.log(error)
    }
  },

  findOwner: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/findOwner", data)
      set({ owner: response.data.foundUser || null })
    } catch (error) {
      console.log(error)
    }
  },
}))

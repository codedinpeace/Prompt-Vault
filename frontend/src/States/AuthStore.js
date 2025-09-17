import {create} from 'zustand'
import toast from 'react-hot-toast'
import {axiosInstance} from '../Utils/axios'

export const useAuthStore = create((set)=>({
    isLoggedIn:false,
    isLoggingIn:false,
    authUser:null,
    isLoggingOut:false,

    signUpUser : async (data) =>{ 
        set({isLoggingIn:true})
        try {
        const response = await axiosInstance.post("/auth/signup", data)
        set({authUser:response.data.user})
        set({isLoggedIn:true})
         toast.success("User Signedup successfully")
         console.log("Response Data :", response.data.user)
        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)
        } finally {
            set({isLoggingIn: false})
        }
    },

    loginUser : async (data) =>{
        set({isLoggingIn:true})
        try {
            const response = await axiosInstance.post("/auth/login", data)
            set({authUser:response.data.user})
            toast.success("Uset loggedIn Successfully")
        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)            
        } finally {
            set({isLoggingIn:false})
        }
    },

    logOut: async ()=>{
        set({isLoggingOut:false})
        try {
            const response = await axiosInstance.post("/auth/logout")
            set({authUser:null})
            toast.success("User loggedOut")
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            set({isLoggingOut:false})
        }
    },

    checkAuth: async ()=>{
        try {
            const response = await axiosInstance.get("/auth/check")
            set({authUser:response.data.user, isLoggedIn:true})  
        } catch (error) {
            toast.error("Something went wrong")
            console.log(error   )
        }
    }
}))
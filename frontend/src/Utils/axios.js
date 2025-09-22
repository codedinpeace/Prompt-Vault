import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:"https://prompt-vault-1ckl.onrender.com/api",
    withCredentials:true,
})  
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:"https://prompt-vault-cyan.vercel.app/api",
    withCredentials:true,
})  
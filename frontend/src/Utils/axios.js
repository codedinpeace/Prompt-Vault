import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:"https://prompt-vault-2.onrender.com/api",
    withCredentials:true,
})  
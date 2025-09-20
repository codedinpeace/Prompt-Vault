import React, {useState} from 'react'
import Logo from '../smallComponents/logo'
import { Link } from 'react-router-dom'
import { User, Eye, EyeClosed } from 'lucide-react'
import { useAuthStore } from '../States/AuthStore'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({
    email:"",
    password:"",
  })
  const {loginUser, isLoggingIn} = useAuthStore()

  if(isLoggingIn){
    return <div className="mt-120 flex justify-center align-center">Loading...</div>
  }

  function changeShowPassword () {
    setShowPassword(!showPassword)
  }

 function changeEmail(e){
    setUser((prev)=>({
      ...prev, email:e.target.value
    }))
 }
 function changePassword(e){
    setUser((prev)=>({
      ...prev, password:e.target.value
    }))
 }

 function handleSubmit( ){
   loginUser(user)
   navigate("/")
 }

  return (
    <div className='bg-[#968ae8] w-full h-screen text-black'>
      <div className='p-5'>
        <Logo />
      </div>  
      <div className='Ball1 blur-2xl w-50 h-50 absolute right-40 rounded-full bg-white'></div>
      <div className='Ball1 blur-2xl w-50 h-50 absolute top-40 left-20 rounded-full bg-white'></div>
      <div className='Ball1 blur-2xl w-50 h-50 absolute bottom-40 right-100 rounded-full bg-white'></div>
      <div className='flex justify-center'>    
    
      <div className="bigBox bg-[#f3f3f3] mt-60 rounded-md shadow-md h-[300px] p-10 w-[600px] max-md:w-[500px] max-sm:p-5 max-sm:w-[350px]"> 
      <div>
        <h1 className='text-3xl font-semibold mb-7 max-sm:text-center'>Login</h1>
      </div>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 max-sm:items-center'>
        <div className='relative w-120 max-sm:w-70'>  
          <input onChange={changeEmail} type="email"  placeholder='Enter your email' className='max-sm:w-70 w-120 text-lg h-10 border-1 max-md:w-100 border-[#2e2e2e] outline-none rounded-md pl-8'/>
            <User className='absolute top-2 left-0  mr-3 ml-1'/>
            </div>
          <div className='relative w-120 max-md:w-100 max-sm:w-70'>  
          <input onChange={changePassword} type={`${showPassword ? "text" : "password"}`}  placeholder='Enter your password' className='w-120 max-sm:w-70 max-md:w-100 text-lg h-10 border-1 border-[#2e2e2e] outline-none rounded-md pl-3'/>
            { showPassword ? <EyeClosed onClick={changeShowPassword} className='absolute cursor-pointer top-2 right-0  mr-3'/> : <Eye onClick={changeShowPassword} className='absolute cursor-pointer top-2 right-0  mr-3'/>}
            </div>
          <div className='flex items-end gap-5 max-sm:flex-col max-sm:items-center '>
          <button type='submit' className='bg-[#9E92e8] border-1 border-[#9e92e8] cursor-pointer hover:bg-transparent hover:text-black max-md:px-10 px-12 py-1 text-lg rounded-md text-white font-semibold'>Log In</button>
        <p>Dont have an account? <Link to="/signup" className='text-[#7565df] underline'>Sign Up</Link></p>
          </div>    
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login
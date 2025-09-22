import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { User, Eye, EyeClosed } from 'lucide-react'
  import Logo from '../SmallComponents/Logo'
import { useAuthStore } from '../States/AuthStore'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const {isLoggingIn, signUpUser} = useAuthStore() //Something was wrong, now its right


  function changeShowPassword (){
      setShowPassword(!showPassword)
  }


  function nameChange (e){
    setUser((prev)=>({...prev, name:e.target.value}))
  }
  function emailChange (e){
    setUser((prev)=>({...prev, email:e.target.value}))
  }
  function passwordChange (e){
    setUser((prev)=>({...prev, password:e.target.value}))
  }

  function handleSubmit (e){
    e.preventDefault()
    signUpUser(user)
  }

  return (
    <div>
      <div className='bg-[#968ae8] w-full h-screen'>
      <div className='p-5'>
        <Logo />
      </div>

<div className='Ball1 blur-2xl w-50 h-50 absolute right-40 rounded-full bg-white'></div>
<div className='Ball1 blur-2xl w-50 h-50 absolute top-40 left-20 rounded-full bg-white'></div>
<div className='Ball1 blur-2xl w-50 h-50 absolute bottom-40 right-100 rounded-full bg-white'></div>
<div className='flex justify-center'>    

<div className="bigBox text-black bg-[#f3f3f3] mt-60 rounded-md shadow-md h-[340px] p-10 w-[600px] max-md:w-[500px] max-sm:p-5 max-sm:w-[350px]"> 
<div>
  <h1 className='text-3xl font-semibold mb-7 max-sm:text-center'>Signup</h1>
</div>
  <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-sm:items-center'>
  <div className='relative w-120 max-sm:w-70'>  
    <input type="text" onChange={nameChange}  placeholder='Enter your full name' className='max-sm:w-70 w-120 text-lg h-10 border-1 max-md:w-100 border-[#2e2e2e] outline-none rounded-md pl-8'/>
      <User className='absolute top-2 left-0  mr-3 ml-1'/>
      </div>
  <div className='relative w-120 max-sm:w-70'>  
    <input type="email" onChange={emailChange}  placeholder='Enter your email' className='max-sm:w-70 w-120 text-lg h-10 border-1 max-md:w-100 border-[#2e2e2e] outline-none rounded-md pl-8'/>
      <User className='absolute top-2 left-0  mr-3 ml-1'/>
      </div>
    <div className='relative w-120 max-md:w-100 max-sm:w-70'>  
    <input type={`${showPassword ? "text" : "password"}`} onChange={passwordChange}  placeholder='Enter your password' className='w-120 max-sm:w-70 max-md:w-100 text-lg h-10 border-1 border-[#2e2e2e] outline-none rounded-md pl-3'/>
      { showPassword ? <EyeClosed onClick={changeShowPassword} className='absolute cursor-pointer top-2 right-0  mr-3'/> : <Eye onClick={changeShowPassword} className='absolute cursor-pointer top-2 right-0  mr-3'/>}
      </div>
    <div className='flex items-end gap-5 max-sm:flex-col max-sm:items-center '>
    <button className='bg-[#9E92e8] border-1 border-[#9e92e8] cursor-pointer hover:bg-transparent hover:text-black max-md:px-10 px-12 py-1 text-lg rounded-md text-white font-semibold'>Sign Up</button>
  <p>Dont have an account? <Link to="/login" className='text-[#7565df] underline'>Login</Link></p>
    </div>
  </form>
</div>
</div>
</div>
    </div>
  )
}

export default Signup
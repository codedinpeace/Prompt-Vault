import React from 'react'
import { Zap, Shield, UsersRound,ArrowRight } from 'lucide-react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const Hero = () => {

  useGSAP(()=>{
    gsap.from(".Ai", {
      y:-50,
      opacity:0,
      duration:0.5,
    })
    gsap.from(".heading", {
      y:-50,
      opacity:0,
      duration:0.5,
    })
    gsap.from(".paragraph", {
      x:100,
      opacity:0,
      duration:0.5,
    })
    gsap.from(".buttons", {
      y:50,
      opacity:0,
      duration:0.5
    })
    
    gsap.from(".cards .card1", {
      y:-50,
      duration:0.5,
      opacity:0,
      stagger:0.2,
    })
  }, [])

  return (
    <div className='w-full max-md:h-[1200px] h-[92.5vh] bg-[#F7F5FF] max-md:mb-30'>
      <div className='flex flex-col items-center gap-10 '>
          <div className='Ai flex gap-1 bg-[#e1defa] max-md:px-3 max-md:text-[15px] font-medium px-10 justify-center rounded-full py-1 mt-20'>
              <Zap /> <p>Ai Powered Prompt Management</p> 
          </div>
          <div>
            <h1 className='heading text-5xl max-sm:text-3xl max-md:text-4xl max-md:max-w-sm font-semibold max-w-lg text-center mx-auto mb-5 mt-5'>Build Your Perfect <span className='text-[#9E92E8]'>Prompt Library</span></h1>
            <p className='paragraph text-xl max-w-[750px] text-center opacity-70 max-sm:text-[14px] max-sm:max-w-[300px] max-md:text-[16px] max-md:max-w-[400px] mx-auto'>Create, Organize, and share Ai prompts with a professional community. Keep up your best prompts private to contribute to the global knowledge base</p>
          </div>
          <div className='buttons flex gap-5'>
            <Link to="/login">
            <button className='px-7 py-3 bg-[#9E92E8] text-xl text-white font-medium rounded-md cursor-pointer border-1 hover:bg-transparent hover:text-black border-[#9E92E8] transition-all duration-100 flex gap-1 max-md:text-[16px] max-md:px-4 max-sm:text-[14px] max-sm:px-2 items-center'>Get Started Free <ArrowRight className='max-sm:hidden' /></button>
            </Link>
            <Link to="/community">
            <button className='px-7 py-3 border-1 transition-all duration-100 border-gray-400  text-xl hover:bg-[#9E92E8] hover:border-[#9E92E8] hover:text-white font-medium rounded-md cursor-pointer max-md:text-[16px] max-md:px-4 max-sm:text-[14px] max-sm:px-2' >Explore Community</button>
            </Link>
          </div>
          <div className='cards flex justify-center items-center text-center gap-20 max-2xl:gap-10 mt-10 flex-wrap '>
            <div className="card1">
            <Shield className='w-9 h-9 mx-auto mb-4 mt-5' color='#9E92E8'/>  
            <h3 className='text-2xl font-medium max-md:text-xl mb-1'>Private & Secure</h3>
            <p className='text-lg opacity-70 max-w-[300px] text-center max-lg:text-[14px] max-lg:max-w-[200px]'>Keep your prompts private or share with the community</p>
            </div>
            <div className="card1">
            <Zap className='w-9 h-9 mx-auto mb-4 mt-5' color='#9E92E8'/>  
            <h3 className='text-2xl font-medium max-md:text-xl mb-3'>Smart Categories</h3>
            <p className='text-lg opacity-70 max-w-[300px] text-center max-lg:text-[14px] max-lg:max-w-[200px]'>Automatically categorized by task type and purpose</p>
            </div>
            <div className="card1">
            <UsersRound className='w-9 h-9 mx-auto mb-4 mt-5' color='#9E92E8'/>  
            <h3 className='text-2xl font-medium max-md:text-xl mb-1'>Community Driven</h3>
            <p className='text-lg opacity-70 max-w-[300px] text-center mx-auto max-lg:text-[14px] max-lg:max-w-[200px]'>Learned from the best prompts shared by professionals</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
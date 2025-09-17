import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='ctaBg w-full p-30 bg-[#796bd1] max-lg:p-10 max-sm:p-8'>
        <div className='flex flex-wrap gap-5 justify-around max-lg:items-center items-end'>
        <div className=''>
            <h1 className='text-5xl max-lg:text-3xl max-lg:text-center max-xl:text-4xl font-semibold text-white '>Get Started Today!</h1>
            <p className='text-xl max-lg:text-center max-md:max-w-[300px] max-w-xl max-lg:text-[16px] max-xl:max-w-lg font-medium text-white opacity-70 mt-3'>Join now and make your ideas easier to create, save, and share</p>
        </div>
        <Link to="/dashboard"><button className='cursor-pointer w-60 py-3 max-md:w-40 max-md:py-2 max-md:text-lg rounded-md group gap-2 bg-white flex items-center justify-center text-2xl'>Get Started < ArrowRight className='group-hover:ml-1 transition-all duration-100'/></button></Link>
        </div>
    </div>
  )
}

export default CTA
import React from 'react'

const HowItWorks = () => {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-medium'>How <span className='text-[#9E92E8]'>promptVault</span> Works</h1>
            <p className='text-xl opacity-70'>Three steps to use pormptVault</p>
        </div>
        <div className="stepsCard">
            <div className="stepsCard1 flex flex-col items-center mt-10">
            <div className='bg-[#9E92E8] rounded-full flex justify-center shadow-md p-2 w-12 h-12'>
                <h3 className='text-3xl font-semibold text-white'>1</h3>
            </div>
            <h1 className='text-2xl font-medium text-center'>Let Us Know who you are</h1>
            <p className='text-lg max-w-1/4  opacity-70 text-center'>Navigate to the login or signup page from the navbar and make an account so we know who you are </p>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks
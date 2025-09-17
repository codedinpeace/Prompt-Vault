import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 

gsap.registerPlugin(ScrollTrigger);
const HowItWorks = () => {

    useGSAP(()=>{
        gsap.from(".HowItWorks", {
            y:-50,
            opacity:0,
            scrollTrigger:{
                trigger: ".HowItWorks",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
            
        })
        gsap.from(".HowItWorks-paragraph ", {
            y:50,
            opacity:0,
            scrollTrigger:{
                trigger: ".HowItWorks-paragraph ",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
            
        })
        gsap.from(".stepsCard1", {
            y:50,
            opacity:0,
            stagger:0.2,
            scrollTrigger:{
                trigger: ".stepsCard .stepsCard1 ",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
            
        })
    })

  return (
    <div className='mb-20'>
        <div className='flex flex-col items-center'>
            <h1 className='HowItWorks text-3xl font-semibold max-sm:text-2xl'>How <span className='text-[#9E92E8] underline'>promptVault</span> Works</h1>
            <p className='HowItWorks-paragraph text-xl opacity-70 max-sm:text-lg'>Three steps to use pormptVault</p>
        </div>
        <div className="stepsCard max-2xl:gap-10 px-1  flex gap-15 mt-10 flex-wrap justify-center">
            <div className="stepsCard1 gap-2 flex flex-col items-center mt-10">
            <div className='bg-[#9E92E8] rounded-full flex justify-center shadow-md p-2 w-12 h-12'>
                <h3 className='text-3xl font-semibold text-white'>1</h3>
            </div>
            <h1 className='text-2xl font-medium text-center'>Let Us Know who you are</h1>   
            <p className='text-lg  max-w-md opacity-70 max-sm:text-[16px] max-sm:max-w-sm text-center'>Navigate to the login or signup page from the navbar and make an account so we know who you are </p>
            </div>
            <div className="stepsCard1 gap-2 flex flex-col items-center mt-10">
            <div className='bg-[#9E92E8] rounded-full flex justify-center shadow-md p-2 w-12 h-12'>
                <h3 className='text-3xl font-semibold text-white'>2</h3>
            </div>
            <h1 className='text-2xl font-medium text-center'>Explore Dashboard</h1>   
            <p className='text-lg  max-w-md  opacity-70 text-center  max-sm:text-[16px] max-sm:max-w-sm '>Check Insights, explore community or click the <span className='text-[#2c1d92]'>Add Prompt</span> button to add prompts either privately or publicly</p>
            </div>
            <div className="stepsCard1 flex gap-2 flex-col items-center mt-10">
            <div className='bg-[#9E92E8] rounded-full flex justify-center shadow-md p-2 w-12 h-12'>
                <h3 className='text-3xl font-semibold text-white'>3</h3>
            </div>
            <h1 className='text-2xl font-medium text-center'>Add Your Prompt</h1>   
            <p className='text-lg max-w-md max-md:max-w-md  opacity-70 text-center  max-sm:text-[16px] max-sm:max-w-sm '>Once you're redirected to the <span className='text-[#2c1d92]'>add-prompt</span> page, add title, and your prompt and your saved prompt will be categorized by Ai.</p>
            </div>
            
        </div>
    </div>
  )
}

export default HowItWorks
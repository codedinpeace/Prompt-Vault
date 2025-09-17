import React from 'react'
import {Folders, ArrowRight, MonitorSmartphone, BarChart3, Download} from 'lucide-react' 
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";  

const Features = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from(".Heading", {
            y:-50,
            opacity:0,
            scrollTrigger:{
                trigger: ".Heading",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
        })
        gsap.from(".Tagline", {
            y:50,
            opacity:0,
            scrollTrigger:{
                trigger: ".Heading",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
        })
        gsap.from(".cards1", {
            y:-50,
            x:-200,
            opacity:0,
            scrollTrigger:{
                trigger: ".Heading",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
        })
        gsap.from(".cards2", {
            y:-50,
            x:200,
            opacity:0,
            scrollTrigger:{
                trigger: ".Heading",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
        })
        gsap.from(".cards3", {
            y:50,
            x:-200,
            opacity:0,
            scrollTrigger:{
                trigger: ".Heading",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
        })
        gsap.from(".cards4", {
            y:50,
            x:200,
            opacity:0,
            scrollTrigger:{
                trigger: ".Heading",
                scroller: "body",   
                start: "top 80%",   
                end: "top 50%",     
                toggleActions: "play none none reverse",
            }
        })
    }, [])

  return (
    <div className="mb-30" id='features'>
        <div className='flex flex-col items-center mt-10'>
        <h1 className='Heading text-3xl font-semibold'>Features</h1>
        <p className='Tagline text-xl opacity-70 max-sm:text-[16px]'>What it changes in your everyday life</p>
        </div>
        <div className="FeatureCards flex justify-center flex-wrap max-sm:px-5 gap-10 mt-10">
            <div className="cards1 max-xl:max-w-1/2 max-lg:max-w-xl  flex shadow-lg flex-col gap-5 max-sm:p-5 p-10 border-1 max-w-1/3 border-zinc-300 rounded-md">
            <Folders color="#9E92E8" className='w-7 h-7'/>
            <h1 className=' text-2xl font-medium '>Smart Organization</h1>
            <p className='text-lg opacity-70'>Categorize prompts with custom tags, folders, and filters. Keep your workspace neat so you can focus on creating instead of searching through clutter.</p>
            <Link to="/add-prompt" className='flex text-lg group items-center gap-2 text-[#9E92E8] underline'>Get Started <ArrowRight className='group-hover:ml-2 transition-all duration-100' /></Link>
            </div>
            <div className="cards2 max-xl:max-w-1/2 max-lg:max-w-xl  flex shadow-lg flex-col gap-5 max-sm:p-5 p-10 border-1 max-w-1/3 border-zinc-300 rounded-md">
            <MonitorSmartphone color="#9E92E8" className='w-7 h-7'/>
            <h1 className='text-2xl font-medium '>Cross-Platform Access</h1>
            <p className='text-lg opacity-70'>Access your vault seamlessly from desktop, tablet, or mobile. Your prompts stay synced across devices so you can work whenever inspiration strikes.</p>
            <Link to="/add-prompt" className='flex text-lg group items-center gap-2 text-[#9E92E8] underline'>Get Started <ArrowRight className='group-hover:ml-2 transition-all duration-100' /></Link>
            </div>
            <div className="cards3 max-xl:max-w-1/2 max-lg:max-w-xl  flex shadow-lg flex-col gap-5 max-sm:p-5 p-10 border-1 max-w-1/3 border-zinc-300 rounded-md">
            <BarChart3 color="#9E92E8" className='w-7 h-7'/>
            <h1 className='text-2xl font-medium '>Analytics & Insights</h1>
            <p className='text-lg opacity-70'>Track which prompts deliver the best results. Use built-in analytics to understand performance and refine your workflow with data-backed decisions.</p>
            <Link to="/add-prompt" className='flex text-lg group items-center gap-2 text-[#9E92E8] underline'>Get Started <ArrowRight className='group-hover:ml-2 transition-all duration-100' /></Link>
            </div>
            <div className="cards4 max-xl:max-w-1/2 max-lg:max-w-xl  flex shadow-lg flex-col gap-5 max-sm:p-5 p-10 border-1 max-w-1/3 border-zinc-300 rounded-md">
            <Download color="#9E92E8" className='w-7 h-7'/>
            <h1 className='text-2xl font-medium '>Quick Export</h1>
            <p className='text-lg opacity-70'>Export your prompts instantly into multiple formats like PDF, Markdown, or plain text. Perfect for sharing outside the vault or backing up your work offline.</p>
            <Link to="/add-prompt" className='flex text-lg group items-center gap-2 text-[#9E92E8] underline'>Get Started <ArrowRight className='group-hover:ml-2 transition-all duration-100' /></Link>
            </div>
        </div>
    </div>
  )
}

export default Features
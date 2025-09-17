  import React, {useState} from "react";
  import { BookOpen, Plus, Menu, X } from "lucide-react";
  import { Link } from "react-router-dom";
  import gsap from 'gsap';
  import { useGSAP } from '@gsap/react';
  import { useAuthStore } from "../States/AuthStore";

  const Navbar = () => {

    
    const { authUser, isLoggedIn } = useAuthStore();
    
    useGSAP(()=>{
      if(authUser){

        gsap.from(".logo", {
          delay:0.5,
          y:-50,
          x:-50,
          opacity:0,
          duration:0.7,
        })
        gsap.from(".logoHeading", {
          y:-50,
          x:-50,
          opacity:0,
          duration:0.7,
        })
        gsap.from(".button", {
          y:-50,
          x:50,
          opacity:0,
          duration:0.7,
        })
        gsap.from(".Navbar a", {
          y:-50,
          opacity:0,
          duration:0.5,
          stagger:0.2,
        })
      }
    })
    
    const [visible, setIsVisible] = useState(false)
    

    return (
      <>
        <div className="flex justify-around  border-y-2 border-zinc-200 max-lg:hidden p-3">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex gap-2 items-center">
            <div className="logo bg-[#9089E5] p-2 inline-block rounded-md">
              <BookOpen className="" color="#ffffff" />
            </div>
            <h3 className="logoHeading text-xl font-semibold">
              Prompt<span className="text-[#9089e5]">Vault</span>
            </h3>
            </Link>
          </div>
          <div className="Navbar flex gap-5 font-medium items-end">
            <Link to="/" className="text-lg">
              Home
            </Link>
            <Link to="/dashboard" className="text-lg">
              Dashboard
            </Link>
            <Link to="/community" className="text-lg">
              Community
            </Link>
            <a href="#features" className="text-lg">
              Features
            </a>
          </div>
          <div className="flex gap-3">
            {
              isLoggedIn ?
          <Link to="/profile" className="cursor-pointer"><div className="bg-[#9089e5] w-10 h-10 rounded-full text-xl font-semibold text-white flex justify-center">
            <p className="text-center my-auto">{authUser.name.charAt(0)}</p>
          </div></Link>
          :
             <Link
              to="/login"
              className="button text-lg  bg-[#9089E5] px-6 py-2 text-white rounded-md "
            >
              Login
            </Link> 
            }
            
            <Link
              to="/add-prompt"
              className="button flex text-md items-center group  bg-zinc-100 px-6 py-2 rounded-md border-1 border-zinc-300"
            >
              <Plus className="group-hover:rotate-360 transition-all duration-2000 group-hover:scale-105 "/>
              Add Prompt
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <div className="lg:hidden p-3 flex justify-between px-10 items-center">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-1">
              <div className="bg-[#9089E5] p-2 inline-block rounded-md">
                <BookOpen color="#ffffff" />
              </div>
              <h3 className="text-xl font-semibold">
                Prompt<span className="text-[#9089e5]">Vault</span>
              </h3>
              </Link>
            </div>
              
            <Menu className="cursor-pointer" onClick={()=>{setIsVisible(true)}}/>
          </div>
          <div
            className={`navBar ${visible ? "left-[30%]" : "left-[100%]" } flex flex-col gap- bg-[#9089E5] shadow-2xl  h-screen w-full gap-5 p-10  text-white fixed top-0 transition-all duration-500 z-50`}
          >
            <div className="flex gap-5 flex-col font-medium ">
              <Link to="/" onClick={()=>{setIsVisible(false)}} className="text-xl">
                Home
              </Link>
              <Link to="/dashboard" onClick={()=>{setIsVisible(false)}} className="text-xl">
                Dashboard
              </Link>
              <Link to="/community" onClick={()=>{setIsVisible(false)}} className="text-xl">
                Community
              </Link>
              <a href="#features" onClick={()=>{setIsVisible(false)}} className="text-xl">
                Features
              </a>
            </div>
            <div className="flex gap-5 flex-col">
              <Link
                to="/login"
                className="text-lg  bg-[#fff] text-black w-30 font-semibold text-center  px-6 py-2  rounded-md "
              >
                Login
              </Link>
              <Link
                to="/add-prompt"
                className="flex text-md items-center bg-zinc-100 px-6 py-2 w-50 text-black rounded-md border-1 border-zinc-300"
              >
                <Plus />
                Add Prompt
              </Link>
              <div className=" bg-white w-7 items-center rounded-full flex justify-center h-7" onClick={()=>{setIsVisible(false)}}>
                <X className="cursor-pointer " color="black" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Navbar;

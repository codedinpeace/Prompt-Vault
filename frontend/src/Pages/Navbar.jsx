import React from "react";
import { BookOpen, Plus, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around  border-y-2 border-zinc-200 max-lg:hidden p-3">
        <div className="flex items-center gap-2">
          <div className="bg-[#9089E5] p-2 inline-block rounded-md">
            <BookOpen color="#ffffff" />
          </div>
          <h3 className="text-xl font-semibold">
            Prompt<span className="text-[#9089e5]">Vault</span>
          </h3>
        </div>
        <div className="flex gap-5 font-medium items-end">
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
        <div className="flex gap-2">
          <Link
            to="/login"
            className="text-lg  bg-[#9089E5] px-6 py-2 text-white rounded-md "
          >
            Login
          </Link>
          <Link
            to="/add-prompt"
            className="flex text-md items-center bg-zinc-100 px-6 py-2 rounded-md border-1 border-zinc-300"
          >
            <Plus />
            Add Prompt
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div className="lg:hidden p-3 flex justify-between px-10 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#9089E5] p-2 inline-block rounded-md">
              <BookOpen color="#ffffff" />
            </div>
            <h3 className="text-xl font-semibold">
              Prompt<span className="text-[#9089e5]">Vault</span>
            </h3>
          </div>
          <Menu />
        </div>
        <div
          className={`flex flex-col gap- bg-[#9089E5] shadow-2xl  h-screen w-full gap-5 p-10  text-white absolute top-0 left-[100%]`}
        >
          <div className="flex gap-5 flex-col font-medium   ">
            <Link to="/dashboard" className="text-xl">
              Dashboard
            </Link>
            <Link to="/community" className="text-xl">
              Community
            </Link>
            <a href="#features" className="text-xl">
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
            <div className=" bg-white w-7 absolute top-10 items-center rounded-full flex justify-center left-90 h-7">
              <X className="cursor-pointer " color="black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

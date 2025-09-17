import React from 'react'

const Footer = () => {
  return (
    <div>
        

<footer className=" rounded-lg   text-black mt-20 mb-10 ">
    <div className="w-full mx-auto max-w-screen-xl p-4  max-md:justify-center md:flex md:items-center md:justify-between">
      <span className="  sm:text-center  text-xl">© 2025 <a href="" className="hover:underline text-xl max-md:mx-auto">PromptVault™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap max-md:justify-center items-center mt-3 text-sm font-medium text-black  sm:mt-0">
        <li>
            <a href="" className="hover:underline me-4 md:me-6 text-xl max-md:text-lg ">About</a>
        </li>
        <li>
            <a href="" className="hover:underline me-4 md:me-6 text-xl max-md:text-lg ">Privacy Policy</a>
        </li>
        <li>
            <a href="" className="hover:underline me-4 md:me-6 text-xl max-md:text-lg ">Licensing</a>
        </li>
        <li>
            <a href="" className="hover:underline text-xl max-md:text-lg ">Contact</a> 
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer
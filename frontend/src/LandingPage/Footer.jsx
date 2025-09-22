import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        

<footer className=" rounded-lg   text-black mt-20 mb-10 ">
    <div className="w-full mx-auto max-w-screen-xl p-4  max-md:justify-center md:flex md:items-center md:justify-between">
      <span className="  sm:text-center  text-xl">© 2025 <a href="" className="hover:underline text-xl max-md:mx-auto">PromptVault™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap max-md:justify-center items-center mt-3 text-sm font-medium text-black  sm:mt-0">
        <li>
            <Link to="/about" className="hover:underline me-4 md:me-6 text-xl max-md:text-lg ">About</Link>
        </li>
        <li>
            <Link to="/privacy-policy" className="hover:underline me-4 md:me-6 text-xl max-md:text-lg ">Privacy Policy</Link>
        </li>
        <li>
            <Link to="/license" className="hover:underline me-4 md:me-6 text-xl max-md:text-lg ">Licensing</Link>
        </li>
        <li>
            <Link to="/contact" className="hover:underline text-xl max-md:text-lg ">Contact</Link> 
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer
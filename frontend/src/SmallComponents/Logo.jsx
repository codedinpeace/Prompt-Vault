import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const Logo = () => {
  return (
    <div>
        <Link to="/" className="flex gap-2 items-center">
            <div className="logo bg-[#f3f3f8] p-2 inline-block rounded-md">
              <BookOpen className="" color="#9089E5" />
            </div>
            <h3 className="logoHeading text-xl font-semibold">
              Prompt<span className="text-[#ffffff]">Vault</span>
            </h3>
            </Link>
    </div>
  )
}

export default Logo
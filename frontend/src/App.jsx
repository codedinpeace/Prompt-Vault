import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import DashBoard from './Pages/DashBoard'
import Community from './Pages/Community'
import AddPrompts from './Pages/AddPrompts'
import Categories from './Pages/Categories'
import LandingPage from './LandingPage/LandingPage'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './States/AuthStore'

const App = () => {
  const location = useLocation();

  // Hide Navbar on login and signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";
  const {authUser, checkAuth} = useAuthStore()
  
  useEffect(()=>{
    checkAuth()
  }, [])

  if(!authUser){
    return <div className="mt-120 flex justify-center align-center">Loading...</div>
  }

  return (
    <div>
      <Toaster />
      {!hideNavbar && <Navbar />}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/add-prompt" element={<AddPrompts />} />
        {/* Dynamic Routes */}
        <Route path='/category/:name' element={<Categories />} />
      </Routes>
    </div>
  )
}

export default App

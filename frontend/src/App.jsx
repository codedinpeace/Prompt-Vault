import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Hero from './Pages/hero'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import DashBoard from './Pages/DashBoard'
import Community from './Pages/Community'
import AddPrompts from './Pages/AddPrompts'
import Categories from './Pages/Categories'
import LandingPage from './LandingPage/LandingPage'

const App = () => {
  return (
    <div>
      <Navbar />
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
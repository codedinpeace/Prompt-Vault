import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import DashBoard from "./Pages/DashBoard";
import Community from "./Pages/Community";
import AddPrompts from "./Pages/AddPrompts";
import Categories from "./Pages/Categories";
import LandingPage from "./LandingPage/LandingPage";
import toast, { Toaster } from "react-hot-toast";
import { useAuthStore } from "./States/AuthStore";
import ProfilePage from "./LandingPage/ProfilePage";
import {  Navigate } from "react-router-dom";


const App = () => {
  const [photo, setPhoto] = useState(null)
  const location = useLocation();
  // Hide Navbar on login and signup pages
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";
  const { authUser, checkAuth, isLoggedIn } = useAuthStore();

  useEffect(() => {
    checkAuth();
    const storedPhoto = localStorage.getItem("profilePhoto")
    if(storedPhoto) return setPhoto(storedPhoto)
  }, []);


  if (!authUser) {
    return (
      <div className="mt-120 w-full gap-x-2 flex justify-center items-center">
  <div
    className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
  ></div>
  <div
    className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
  ></div>
  <div
    className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
  ></div>
</div>
    );
  }

  return (
    <div>
      <Toaster />
      {!hideNavbar && <Navbar photo={photo} />}
      {/* <Navbar /> */}
      <Routes>
  <Route path="/" element={<LandingPage />} />

  <Route
    path="/signup"
    element={
      isLoggedIn ? (
        <>
          <Navigate to="/" replace />
        </>
      ) : (
        <Signup />
      )
    }
  />

  <Route
    path="/login"
    element={
      isLoggedIn ? (
        <>
          <Navigate to="/" replace />
        </>
      ) : (
        <Login />
      )
    }
  />

  <Route
    path="/dashboard"
    element={isLoggedIn ? <DashBoard /> : <Navigate to="/login" replace />}
  />

  <Route path="/community" element={<Community />} />

  <Route
    path="/add-prompt"
    element={isLoggedIn ? <AddPrompts /> : <Navigate to="/login" replace />}
  />

  <Route path="/category/:name" element={<Categories />} />
  <Route path="/profile" element={<ProfilePage />} />
</Routes>
    </div>
  );
};

export default App;

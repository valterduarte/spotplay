import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Signin from "./pages/signin"
import Register from "./pages/register"


import './global.css'


function App() {  
  return (
   <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   </Router>
  )
}

export default App

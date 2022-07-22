import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
function RouterCom() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterCom
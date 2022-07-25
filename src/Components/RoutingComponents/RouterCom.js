import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom"
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
            <Route path="/contact/:id" element={<Contact />} />
          </Route>

          {/* <Route path="*" element={<Home/>}/> */}
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

//CRUD operation - create read update delete
// emp=[{id:1000,name:"",deparatment:"",salary:3000},{},{}]
// display data in a toBeEnabled
// update and delete button


export default RouterCom
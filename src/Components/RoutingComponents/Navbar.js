import React, { useState } from 'react'
import {Link,Outlet} from "react-router-dom"
function Navbar() {
  const[item,setItem]=useState(300)
  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/about" state={{name:'ReactJs'}}>About</Link>|
      {/* <Link to="/contact/102">Contact</Link> */}
      <Link to={"/contact/"+item}>Contact</Link>

      <Outlet/>  {/* renders nested compoent */}
    </div>
  )
}

export default Navbar
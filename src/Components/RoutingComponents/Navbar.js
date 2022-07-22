import React from 'react'
import {Link,Outlet} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link>

      <Outlet/>  {/* renders nested compoent */}
    </div>
  )
}

export default Navbar
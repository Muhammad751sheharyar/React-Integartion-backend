import React from 'react'
import {NavLink} from'react-router-dom'
function Navbar() {
  return (
    <div>
      {/* <NavLink to={"/Home"}>Home</NavLink> */}
      <NavLink to={"/about"}>Login</NavLink>
      <NavLink to={"/contact"}>Signup</NavLink>
    </div>
)}

export default Navbar
     
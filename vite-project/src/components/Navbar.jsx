import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <NavLink to={"/Home"}>Home</NavLink>
      <NavLink to={"/About"}>Login</NavLink>
      <NavLink to={"/Contact"}>Signup</NavLink>
    </div>
)}

export default Navbar

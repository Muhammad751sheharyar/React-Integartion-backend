import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from '../components/Navbar'
function Button() {
  return (
    <div>
      hello
      {/* <Navbar /> */}
      {/* <h1>hello word</h1> */}
        <NavLink to={"/signup"}>Signup</NavLink>
        <NavLink to={"/login"}>Login</NavLink>     
    </div>
 )
}

export default Button

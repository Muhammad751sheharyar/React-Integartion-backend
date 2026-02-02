import React from 'react'
import { NavLink} from 'react-router-dom'
function Button() {
  return (
    <div>
        <NavLink to={"/signup"} >Signup</NavLink><br />
        <NavLink to={"/login"} >Login</NavLink>     
    </div>
 )
}

export default Button

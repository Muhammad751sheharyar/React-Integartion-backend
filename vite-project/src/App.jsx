import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
// import Login from './components/Login'
// import Home from './components/Home'
import Button from './components/Button'
// import Signup from './components/Signup'

function App() {
  return (
    <>
      <Router>
      <Button />
        <Routes>
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>



    </>
  )
}

export default App


// <div style={{ padding: "20px" }}>
//    <button onClick={() => setPage("signup")}>Signup</button>
//    <button onClick={() => setPage("login")}>Login</button>
//   <hr />
//   {page === "signup" ? <Signup /> : <Login />}
// </div>










import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Button from './components/Button'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Router>
        <Button />
        <Routes>
          <Route path='/signup' element={< Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Home' element={<Home />} />
           <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={< About />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App








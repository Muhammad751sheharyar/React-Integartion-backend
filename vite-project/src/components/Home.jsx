import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
function Home() {
    return (
        <div>
            hello iam home
             <Router>
                <Navbar/>
                <Routes>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/about' element={< About />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Home

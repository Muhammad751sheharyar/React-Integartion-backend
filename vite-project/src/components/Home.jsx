import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
function Home() {
    return (
        <div>
            hello iam home
            {/* <Navbar /> */}
            {/* <Router>
                <Navbar/>
                <Routes>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/About' element={< About />} />
                </Routes>
            </Router> */}
        </div>
    )
}

export default Home

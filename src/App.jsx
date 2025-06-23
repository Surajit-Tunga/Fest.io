import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import bghero from "./assets/bghero.mp4"
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <>
    
      <Router>
             <div className="fixed top-0 left-0 w-full z-50">
                  <NavBar />
             </div>
      <Routes>
          <Route path="/" element={
            <>
              <div className='h-[700px]  relative '>
                 <video autoPlay loop muted src={bghero}className=' fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'></video>
                 <Hero/>
              </div>
              <About/>
            </>
                    } />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer/>  */}
    </Router>
      
      
    </>
  )
}

export default App





import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import bghero from "./assets/bghero.mp4"
import About from './components/About'
const App = () => {
  return (
    <>
    <div>
      <div className='h-[700px]  relative '>
        <video autoPlay loop muted src={bghero}className=' fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'></video>
        <NavBar/>
        <Hero/>
        <About/>
      </div>
      
    </div>
    </>

    
  )
}

export default App





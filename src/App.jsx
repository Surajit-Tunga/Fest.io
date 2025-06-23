import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CountDownTimer from './components/CountDownTimer'
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <div className=" flex my-10 justify-center items-center">
         <CountDownTimer targetDate="2025-07-01T00:00:00" />
    </div>
    </>
    
  )
}

export default App

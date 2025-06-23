import React from 'react'

const Hero = () => {
  return (
<>
       <div className="flex flex-col items-center mt-60 ">
          <h1 className="text-4xl text-bold sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Fest.io 
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl tracking-wide">
            A Responsive lading Page made with React & Tailwind CSS. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, vel!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
             <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white text-center w-full sm:w-auto">
                Events
             </a>
          </div>
          
       </div>

</>
  )
}

export default Hero

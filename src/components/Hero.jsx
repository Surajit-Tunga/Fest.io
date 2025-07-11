import React, { useEffect } from 'react';
import CountDownTimer from './CountDownTimer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
<>
       <div className="flex flex-col items-center mt-60 ">
          <h1 className="text-6xl font-bold sm:text-7xl lg:text-9xl text-center tracking-wide bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text" data-aos="fade-up">
            Fest.io 
          </h1>
          <p className='mt-8 font-bold text-lg text-center 'data-aos="fade-up" data-aos-delay="200">
            Organised by
          </p>
          <p className="my-2 text-lg text-center  max-w-4xl tracking-wide" data-aos="fade-up" data-aos-delay="350">
            Lorem ipsum dolor sit amet.
          </p>
          <div className=" my-8 flex flex-col sm:flex-row items-center justify-center" data-aos="fade-up" data-aos-delay="400">
             <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-700 hover:to-orange-900 py-2 px-4 rounded-full text-white font-semibold text-sm sm:text-base text-center w-full sm:w-auto">
                Explore
             </a>
          </div>
          <div className=" flex justify-center items-center" data-aos="fade-up" data-aos-delay="500">
                    <CountDownTimer targetDate="2026-07-01T00:00:00" />
          </div>
          
       </div>

</>
  )
}

export default Hero

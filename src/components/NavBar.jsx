
import {Menu, X} from "lucide-react";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {

const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false); //hook
const toggleNavbar =()=> {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
 const handleClose = () => {
    setMobileDrawerOpen(false);
  };

useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
<>
<header className='bg-black  flex justify-between items-center p-3 fixed top-4 left-0 right-0  w-11/12 xl:w-10/12 mx-auto rounded-full border border-gray-700 ' data-aos="fade-down">
  <div className='pl-3 font-bold text-orange-700 text-xl'>
    Fest.io
  </div>
  <div className='flex items-center gap-6'> 
    <ul className='hidden lg:flex gap-4 text-xl text-gray-300'>
        <li>
            <a className=' hover:text-orange-600' href="/">Home</a>
        </li>
        <li>
            <a className=' hover:text-orange-600' href="/events">Events</a>
        </li>
        <li>
            <a className=' hover:text-orange-600' href="/team">Team</a>
        </li>
        <li>
            <a className=' hover:text-orange-600' href="/contact">Contact Us</a>
        </li>
    </ul>
    <button className='hidden lg:flex bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-700 hover:to-orange-900 rounded-full py-2 px-3'>
        Brochure
    </button>
    <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
  </div>
  {mobileDrawerOpen && (
       <div className="fixed top-20 right-4 left-4 mx-auto z-40 bg-black  border border-gray-700 rounded-xl py-6 px-4 w-[90%] sm:w-[70%] lg:hidden shadow-lg transition-all duration-300" data-aos="fade-down">
           <ul className="flex flex-col items-center gap-4 text-white text-lg">
                  <li><a className='hover:text-orange-600' href="/" onClick={handleClose}>Home</a></li>
                  <li><a className='hover:text-orange-600' href="/events" onClick={handleClose}>Events</a></li>
                  <li><a className='hover:text-orange-600' href="/team" onClick={handleClose}>Team</a></li>
                  <li><a className='hover:text-orange-600' href="/contact" onClick={handleClose}>Contact Us</a></li>
          </ul>
          <button
                onClick={handleClose}
                   className='mt-6 bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-700 hover:to-orange-900  text-white rounded-full py-2 px-6 block mx-auto' >
                     Brochure
          </button>
        </div>
  )}

</header>
</>
  )
}

export default NavBar

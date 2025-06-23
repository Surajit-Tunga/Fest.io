
import {Menu, X} from "lucide-react";
import { useState } from "react";

const NavBar = () => {

const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false); //hook
const toggleNavbar =()=> {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
 const handleClose = () => {
    setMobileDrawerOpen(false);
  };

  return (
<>
<header className='bg-black flex justify-between items-center p-3 fixed top-4 left-0 right-0  w-11/12 xl:w-10/12 mx-auto rounded-full border border-gray-700 '>
  <div className='pl-3 font-bold text-xl'>
    Fest.io
  </div>
  <div className='flex items-center gap-6'> 
    <ul className='hidden lg:flex gap-4 text-xl text-gray-300'>
        <li>
            <a className=' hover:text-orange-400' href="">Home</a>
        </li>
        <li>
            <a className=' hover:text-orange-400' href="">About</a>
        </li>
        <li>
            <a className=' hover:text-orange-400' href="">Schedule</a>
        </li>
        <li>
            <a className=' hover:text-orange-400' href="">Team</a>
        </li>
    </ul>
    <button className='hidden lg:flex bg-gradient-to-r from-orange-500 to-orange-800 rounded-full py-2 px-3'>
        Brochure
    </button>
    <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
  </div>
  {mobileDrawerOpen && (
       <div className="fixed top-20 right-4 left-4 mx-auto z-40 bg-black  border border-gray-700 rounded-xl py-6 px-4 w-[90%] sm:w-[70%] lg:hidden shadow-lg transition-all duration-300">
           <ul className="flex flex-col items-center gap-4 text-white text-lg">
                  <li><a className='hover:text-orange-400' href="#" onClick={handleClose}>Home</a></li>
                  <li><a className='hover:text-orange-400' href="#" onClick={handleClose}>About</a></li>
                  <li><a className='hover:text-orange-400' href="#" onClick={handleClose}>Schedule</a></li>
                  <li><a className='hover:text-orange-400' href="#" onClick={handleClose}>Team</a></li>
          </ul>
          <button
                onClick={handleClose}
                   className='mt-6 bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-full py-2 px-6 block mx-auto' >
                     Brochure
          </button>
        </div>
  )}

</header>
</>
  )
}

export default NavBar

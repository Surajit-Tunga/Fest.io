import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Convenors = [
  {
    Name: "Rahul Verma",
    Designation: "4th Year, ECE",
  },
  {
    Name: "Sneha Gupta",
    Designation: "3rd Year, CSE",
  },
  {
    Name: "Aravind Raj",
    Designation: "4th Year, IT",
  }
];



const Conv = () => {
   useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  
  return (
    <div className="text-white py-16 px-4">
      <h1 className="text-4xl font-bold mb-14 text-center text-orange-400" data-aos="fade-up">
        Convenor
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 place-items-center">
        {Convenors.map((person, index) => (
          <div
            key={index}
            className="w-72 backdrop-blur-sm bg-transparent border border-orange-400/30 rounded-2xl p-6 
                       shadow-none hover:shadow-[0_8px_30px_-10px_rgba(255,165,0,0.25)] 
                       transition duration-300 text-center"
                       data-aos="fade-up"  data-aos-delay={index * 150}
          >
            <div className="text-2xl font-bold text-white mb-1">
              {person.Name}
            </div>
            <div className="text-orange-300 text-base font-medium">
              {person.Designation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conv;

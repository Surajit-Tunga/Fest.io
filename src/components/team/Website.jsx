import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebTeam = [
  {
    Name: "Surajit Tunga",
    Designation: "3rd Year, ECE",
    Role: "Head",
  },
  {
    Name: "Pooja Rathi",
    Designation: "3rd Year, IT",
    Role: "Volunteer",
  },
  {
    Name: "Amitabh Das",
    Designation: "2nd Year, CSE",
    Role: "Volunteer",
  },
];

const Web = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className="text-white py-16 px-4">
      <h1 className="text-4xl font-bold mb-14 text-center text-orange-400" data-aos="fade-up">
        Web Development Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 place-items-center">
        {WebTeam.map((person, index) => (
          <div
            key={index}
            className="relative w-72 backdrop-blur-sm bg-transparent border border-orange-400/30 rounded-2xl p-6 
                       shadow-none hover:shadow-[0_8px_30px_-10px_rgba(255,165,0,0.25)] 
                       transition duration-300 text-center"
                       data-aos="fade-up" data-aos-delay={index * 150}
          >
            {/* Badge for Head */}
            {person.Role === "Head" && (
              <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold uppercase">
                {person.Role}
              </div>
            )}

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

export default Web;

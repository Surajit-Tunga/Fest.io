import React from 'react';

const EventHeads = [
  { Name: "Aarav Mehta", Designation: "4th Year, CSE", Event: "Hackathon" },
  { Name: "Neha Sharma", Designation: "3rd Year, IT", Event: "Tech Quiz" },
  { Name: "Ishan Roy", Designation: "2nd Year, ECE", Event: "Robo Race" },
  { Name: "Tanya Desai", Designation: "4th Year, EE", Event: "Circuit Debugging" },
  { Name: "Rohit Jain", Designation: "3rd Year, CSE", Event: "Web Design" },
  { Name: "Kriti Sinha", Designation: "2nd Year, IT", Event: "Poster Presentation" },
  { Name: "Dev Malhotra", Designation: "3rd Year, ME", Event: "CAD Modelling" },
  { Name: "Sneha Kulkarni", Designation: "1st Year, ECE", Event: "Tech Talk" },
  { Name: "Aditya Patil", Designation: "4th Year, CSE", Event: "App Development" },
  { Name: "Riya Bose", Designation: "2nd Year, IT", Event: "Gaming Arena" },
];

const Event = () => {
  return (
    <div className="text-white py-16 px-4">
      <h1 className="text-4xl font-bold mb-14 text-center text-orange-400">
        Event Heads
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 place-items-center">
        {EventHeads.map((person, index) => (
          <div
            key={index}
            className="relative w-72 backdrop-blur-sm bg-transparent border border-orange-400/30 rounded-2xl p-6 
                       shadow-none hover:shadow-[0_8px_30px_-10px_rgba(255,165,0,0.25)] 
                       transition duration-300 text-center"
          >
            {/* Smaller Event Badge */}
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium tracking-wide uppercase">
              {person.Event}
            </div>

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

export default Event;

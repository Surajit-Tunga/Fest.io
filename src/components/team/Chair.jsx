import React from 'react';

const Chairperson = [
  {
    Name: "Dr. Arjun Mehta",
    Designation: "Principal",
  },
  {
    Name: "Prof. Priya Desai",
    Designation: "Dean, Academics",
  }
];

const Chair = () => {
  return (
    <div className="text-white py-16 px-4">
      <h1 className="text-4xl font-bold mb-14 text-center text-orange-400">
        College Leadership
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
        {Chairperson.map((person, index) => (
          <div
            key={index}
            className="w-72 backdrop-blur-sm bg-transparent border border-orange-400/30 rounded-2xl p-6 
                       shadow-none hover:shadow-[0_8px_30px_-10px_rgba(255,165,0,0.25)] 
                       transition duration-300 text-center"
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

export default Chair;

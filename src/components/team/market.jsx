import React from 'react';

const MarketingTeam = [
  {
    Name: "Aarav Sinha",
    Designation: "4th Year, ECE",
    Role: "Head",
  },
  {
    Name: "Nisha Jain",
    Designation: "3rd Year, CSE",
    Role: "Co-Head",
  },
  {
    Name: "Tanvi Dutta",
    Designation: "2nd Year, IT",
    Role: "Volunteer",
  },
  {
    Name: "Rohit Paul",
    Designation: "2nd Year, CSE",
    Role: "Volunteer",
  },
  {
    Name: "Harshita Mehta",
    Designation: "2nd Year, ECE",
    Role: "Volunteer",
  },
  {
    Name: "Devansh Rana",
    Designation: "1st Year, CSE",
    Role: "Volunteer",
  },
  {
    Name: "Sneha Choudhury",
    Designation: "1st Year, IT",
    Role: "Volunteer",
  },
  {
    Name: "Karan Singh",
    Designation: "1st Year, ECE",
    Role: "Volunteer",
  },
];

const Market = () => {
  return (
    <div className="text-white py-16 px-4">
      <h1 className="text-4xl font-bold mb-14 text-center text-orange-400">
        Marketing Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 place-items-center">
        {MarketingTeam.map((person, index) => (
          <div
            key={index}
            className="relative w-72 backdrop-blur-sm bg-transparent border border-orange-400/30 rounded-2xl p-6 
                       shadow-none hover:shadow-[0_8px_30px_-10px_rgba(255,165,0,0.25)] 
                       transition duration-300 text-center"
          >
            {/* Badge for Head or Co-Head */}
            {person.Role !== "Volunteer" && (
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

export default Market;

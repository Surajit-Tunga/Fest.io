import React from 'react';

const Volunteers = [
  { Name: "Aryan Ghosh", Designation: "4th Year, CSE", Role: "Head" },
  { Name: "Isha Kapoor", Designation: "3rd Year, IT", Role: "Co-Head" },

  // 35 volunteers (you can replace names if needed)
  ...Array.from({ length: 35 }, (_, i) => ({
    Name: `Volunteer ${i + 1}`,
    Designation: `${(i % 4) + 1}th Year, ${["CSE", "IT", "ECE", "EE"][i % 4]}`,
    Role: "Volunteer",
  }))
];

const Voll = () => {
  return (
    <div className="text-white py-16 px-4">
      <h1 className="text-4xl font-bold mb-14 text-center text-orange-400">
        Volunteer Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 place-items-center">
        {Volunteers.map((person, index) => (
          <div
            key={index}
            className="relative w-72 backdrop-blur-sm bg-transparent border border-orange-400/30 rounded-2xl p-6 
                       shadow-none hover:shadow-[0_8px_30px_-10px_rgba(255,165,0,0.25)] 
                       transition duration-300 text-center"
          >
            {/* Badge for Head or Co-Head */}
            {(person.Role === "Head" || person.Role === "Co-Head") && (
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

export default Voll;

import React from "react";

const sponsors = [
  { name: "TechCorp", link: "#" },
  { name: "InnovaX", link: "#" },
  { name: "DevBase", link: "#" },
  { name: "OpenWave", link: "#" },
  { name: "CodeNest", link: "#" },
  { name: "ByteForge", link: "#" },
];

const SponsorSection = () => {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 border-l-4 border-orange-500 ">
               Our <span className="text-orange-500">Partners</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 transition text-orange-300 font-semibold py-6 px-4 rounded-xl shadow text-lg flex items-center justify-center"
            >
              {sponsor.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;






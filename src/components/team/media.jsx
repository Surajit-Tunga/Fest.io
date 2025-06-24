import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Surajit Tunga",
      role: "Frontend Developer",
      designation: "Lead UI Engineer",
    },
    {
      name: "Ananya Ghosh",
      role: "Event Coordinator",
      designation: "Operations Head",
    },
    {
      name: "Ravi Sharma",
      role: "Backend Developer",
      designation: "Tech Lead",
    },
    // Add more team members here
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-white mb-10">Media Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            className="bg-[#1c1c1c] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-orange-400/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">{member.name}</h3>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-medium text-white">Role:</span> {member.role}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-white">Designation:</span> {member.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

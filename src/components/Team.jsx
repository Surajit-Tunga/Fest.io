import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Surajit Tunga",
    role: "Team Lead",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Aman Verma",
    role: "Backend Developer",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
];

const CoreTeam = () => {
  return (
    <section className="mt-20 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-orange-400">Meet Our Core Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-orange-500/30 transition"
            >
              <h3 className="text-2xl font-semibold mb-1 text-orange-300">{member.name}</h3>
              <p className="text-gray-400 mb-4">{member.role}</p>

              <div className="flex justify-center gap-4 text-lg text-gray-400">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                  <FaLinkedin />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                  <FaGithub />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;

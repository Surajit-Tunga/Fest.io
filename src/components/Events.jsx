import React, { useState } from "react";
import event1 from "../assets/event1.jpeg"
import event2 from "../assets/event2.png"
import event3 from "../assets/event3.jpeg"


const eventList = [
  {
    title: "Hackathon",
    desc: "Build solutions in 24 hours with team synergy.",
    img: event2,
  },
  {
    title: "Design Challenge",
    desc: "Showcase your creativity through UI/UX.",
    img: event1,
  },
  {
    title: "Tech Workshops",
    desc: "Hands-on training with trending tools.",
    img: event3,
  },
  {
    title: "Hackathon",
    desc: "Build solutions in 24 hours with team synergy.",
    img: event2,
  },
  {
    title: "Design Challenge",
    desc: "Showcase your creativity through UI/UX.",
    img: event1,
  },
  {
    title: "Tech Workshops",
    desc: "Hands-on training with trending tools.",
    img: event3,
  },
  {
    title: "Hackathon",
    desc: "Build solutions in 24 hours with team synergy.",
    img: event2,
  },
  {
    title: "Design Challenge",
    desc: "Showcase your creativity through UI/UX.",
    img: event1,
  },
  {
    title: "Tech Workshops",
    desc: "Hands-on training with trending tools.",
    img: event3,
  },
];

const Event = () => {

  return (
    <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 border-l-4 border-orange-500 pl-4">
          Explore <span className="text-orange-500">Events</span>
        </h2>
        <p className="text-5xl mx-10">
          See What’s Going On
        </p>
        <p className="mx-10 mt-4 text-orange-50">
          Unslash your Creativity. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, temporibus!
        </p>
        <div className="relative z-10 px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
               {eventList.map((data, index) => (
                  <div key={index} className="bg-[#100420] border border-orange-500 rounded-2xl overflow-hidden shadow-md hover:shadow-orange-700 transition duration-300 w-full max-w-sm mx-auto">
                      {/* Image */}
                      <img src={data.img} alt="Event Img"className="w-full h-48 object-cover" />
                      {/* Content */}
                     <div className="p-4 space-y-2">
                         {/* Date */}
                        <div className="flex items-center text-sm text-gray-300 gap-2">
                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10m-6 4h6M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                             </svg>
                             <span>"8th & 9th April"</span>
                         </div>
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-white">{data.title}</h3>
                        {/* Description */}
                        <p className="text-sm text-gray-400">{data.desc}</p>
                        {/* Register Button */}
                        <a href="#" className="block mt-4 bg-white text-black text-center px-2 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition" >
                             Register Now
                         </a>
                     </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Event;

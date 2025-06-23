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
];

const Event = () => {

  return (
    <section className="py-16 px-6 md:px-20">
      
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 border-l-4 border-orange-500 pl-4">
          Explore <span className="text-orange-500">Events</span>
        </h2>
     
    </section>
  );
};

export default Event;

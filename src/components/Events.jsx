import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import event1 from "../assets/EventPhoto/event1.jpeg";
import event2 from "../assets/EventPhoto/event2.png";
import Chess from "../components/EventRules/Chess.jsx";
import Hackathon from "../components/EventRules/Hackathon.jsx";

const eventList = [
  {
    title: "Hackathon",
    desc: "Build solutions in 24 hours with team synergy.",
    img: event2,
    modal: Hackathon,
    date: "29 & 30 February",
  },
  {
    title: "Chess",
    desc: "A strategic battle of minds on the board.",
    img: event1,
    modal: Chess,
    date: "30 & 31 February",
  },
  {
    title: "Hackathon",
    desc: "Build solutions in 24 hours with team synergy.",
    img: event2,
    modal: Hackathon,
    date: "29 & 30 February",
  },
  {
    title: "Chess",
    desc: "A strategic battle of minds on the board.",
    img: event1,
    modal: Chess,
    date: "30 & 31 February",
  },
  {
    title: "Hackathon",
    desc: "Build solutions in 24 hours with team synergy.",
    img: event2,
    modal: Hackathon,
    date: "29 & 30 February",
  },
  {
    title: "Chess",
    desc: "A strategic battle of minds on the board.",
    img: event1,
    modal: Chess,
    date: "30 & 31 February",
  },
  {
    title: "Hackathon",
    desc: "Build solutions in 24 hours with team synergy.",
    img: event2,
    modal: Hackathon,
    date: "29 & 30 February",
  },
  {
    title: "Chess",
    desc: "A strategic battle of minds on the board.",
    img: event1,
    modal: Chess,
    date: "30 & 31 February",
  },
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = (eventData) => {
    setSelectedEvent(eventData);
  };

    useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 mt-20 px-6 md:px-20 relative">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 border-l-4 border-orange-500 pl-4" data-aos="fade-up">
        Explore <span className="text-orange-500">Events</span>
      </h2>
      <p className="text-5xl mx-10" data-aos="fade-up" data-aos-delay="200">See What’s Going On</p>
      <p className="mx-10 mt-4 text-orange-50"data-aos="fade-up" data-aos-delay="350">
        Unslash your Creativity. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio, temporibus!
      </p>

      <div className="relative z-10 px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
          {eventList.map((data, index) => (
            <div
              key={index}
              onClick={() => handleClick(data)}
              className="w-full max-w-sm mx-auto cursor-pointer"
              data-aos="fade-up" data-aos-delay={index * 100}
            >
              <div className="bg-[#100420] border border-orange-500 rounded-2xl overflow-hidden shadow-md hover:shadow-orange-700 transition duration-300">
                <img
                  src={data.img}
                  alt="Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-300 gap-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10m-6 4h6M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{data.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-400">{data.desc}</p>
                  <span className="block mt-4 bg-white text-black text-center px-2 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Render selected event's modal */}
      {selectedEvent && (
        <selectedEvent.modal onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
};

export default Event;

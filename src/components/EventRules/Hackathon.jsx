import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hackathon = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    AOS.init({ duration: 700, once: true });
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    // 🔲 Fade-in background with tailwind transition
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-6 overflow-y-auto animate-fadeIn"
    >
      {/* 🔳 Modal with AOS delayed animation */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="bg-[#1a1a1a] max-w-3xl w-full rounded-2xl shadow-lg p-8 relative text-white space-y-8 border border-gray-700"
      >
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center text-2xl"
        >
          &times;
        </button>

        {/* 🔹 Section 1: Event Overview */}
        <section className="space-y-2 border-b border-gray-700 pb-4">
          <h1 className="text-4xl font-bold text-orange-400">💡 Hackathon</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-sm text-gray-300">
            <p><span className="font-medium text-white">Date:</span> 29 & 30 February</p>
            <p><span className="font-medium text-white">Fee:</span> ₹200 / team</p>
            <p><span className="font-medium text-white">Team Size:</span> 1–4 members</p>
            <p><span className="font-medium text-white">Venue:</span> Innovation Lab, Block C</p>
          </div>
        </section>

        {/* 🔹 Section 2: Rules */}
        <section className="space-y-2 border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-semibold text-orange-300">📝 Rules</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>Teams can consist of up to 4 members.</li>
            <li>Hackathon duration: 24 hours.</li>
            <li>The theme will be announced on the spot.</li>
            <li>Internet access is allowed but monitored.</li>
            <li>Plagiarism or code theft results in disqualification.</li>
          </ul>
        </section>

        {/* 🔹 Section 3: Coordinators */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-orange-300">📞 Event Coordinators</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><span className="font-medium text-white">Rahul Sen:</span> +91 99887 65432</li>
            <li><span className="font-medium text-white">Ananya Ghosh:</span> +91 98776 54321</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Hackathon;

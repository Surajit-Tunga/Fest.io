import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Chess = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    AOS.init({ duration: 600, once: true });
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-6 overflow-y-auto">
      <div
        data-aos="zoom-in"
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
          <h1 className="text-4xl font-bold text-orange-400">♟ Chess Tournament</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-sm text-gray-300">
            <p><span className="font-medium text-white">Date:</span> 30 & 31 February</p>
            <p><span className="font-medium text-white">Fee:</span> ₹100</p>
            <p><span className="font-medium text-white">Mode:</span> Solo</p>
            <p><span className="font-medium text-white">Venue:</span> Tech Hall - Room 205</p>
          </div>
        </section>

        {/* 🔹 Section 2: Rules */}
        <section className="space-y-2 border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-semibold text-orange-300">📝 Rules</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>Standard FIDE rules apply for all matches.</li>
            <li>Each round will use digital chess clocks.</li>
            <li>Single-elimination format to determine finalists.</li>
            <li>Final round is best-of-three.</li>
            <li>Any misconduct results in instant disqualification.</li>
          </ul>
        </section>

        {/* 🔹 Section 3: Coordinators */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-orange-300">📞 Event Coordinators</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><span className="font-medium text-white">Surajit Tunga:</span> +91 98765 43210</li>
            <li><span className="font-medium text-white">Priya Das:</span> +91 91234 56789</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Chess;

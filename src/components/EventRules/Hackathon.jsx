import React, { useEffect } from "react";

const Hackathon = () => {
  // Hide scroll & prevent background interaction (optional)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white z-[9999] pt-24 px-6 overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">Hackathon Rules</h1>
      <p className="mb-6">Here are the rules for the Hackathon event...</p>
      {/* Add your rules, details, etc. */}
    </div>
  );
};

export default Hackathon;

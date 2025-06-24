import React, { useEffect } from "react";

const Chess = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white z-[9999] pt-24 px-6 overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">Chess Event</h1>
      <p>All rules and description of the Chess event go here.</p>
    </div>
  );
};


export default Chess;

import React from "react";

const Dino = ({ isJumping, dinoRef }) => {
  return (
    <div
      ref={dinoRef}
      className={`absolute bottom-0 left-6 w-12 h-12 bg-yellow-300 rounded-md transition-transform duration-300 ease-in-out ${
        isJumping ? "-translate-y-32" : "translate-y-0"
      }`}
    >
      {/* Replace with Dino image later */}
      <div className="w-full h-full flex flex-col items-center justify-center text-white font-bold text-3xl">
        🦖
      </div>
    </div>
  );
};

export default Dino;

import React from "react";

const GameButton = ({ onStartGame }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={onStartGame}
        className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="relative flex items-center space-x-3">
          <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">
            ▶️
          </span>
          <span className="text-2xl">Start Game</span>
        </div>
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </button>

      <p className="text-emerald-700 text-lg font-medium animate-pulse">
        🦕 Ready for an adventure?
      </p>
    </div>
  );
};

export default GameButton;

import React from 'react';

const ScoreDisplay = ({ highestScore }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-200">
      <div className="flex items-center justify-center space-x-3 mb-3">
        <span className="text-3xl">🏆</span>
        <h2 className="text-2xl font-bold text-emerald-800">Highest Score</h2>
        <span className="text-2xl">⭐</span>
      </div>
      
      <div className="text-center">
        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mb-2">
          {highestScore.toLocaleString()}
        </div>
        <p className="text-emerald-600 font-medium">
          {highestScore === 0 ? "Play your first game!" : "Amazing achievement! 🎉"}
        </p>
      </div>
      
      {highestScore > 0 && (
        <div className="mt-4 flex justify-center space-x-1">
          {[...Array(Math.min(5, Math.floor(highestScore / 1000) + 1))].map((_, i) => (
            <span key={i} className="text-yellow-400">⭐</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScoreDisplay;
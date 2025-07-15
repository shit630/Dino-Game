// src/pages/Home.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GameButton from "../components/GameButton";
import ScoreDisplay from "../components/ScoreDisplay";

function Home() {
  const [highestScore, setHighestScore] = useState(0);

  const handleStartGame = () => {
    const newScore = Math.floor(Math.random() * 5000) + 100;
    if (newScore > highestScore) {
      setHighestScore(newScore);
    }
    console.log("Starting game...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-blue-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
          🦕
        </div>
        <div className="absolute top-40 right-20 text-4xl opacity-15 animate-pulse">
          🌴
        </div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce delay-1000">
          🦴
        </div>
        <div className="absolute top-60 left-1/3 text-3xl opacity-10 animate-pulse delay-500">
          🌿
        </div>
        <div className="absolute bottom-60 right-1/3 text-4xl opacity-15 animate-bounce delay-700">
          🥚
        </div>

        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
      </div>

      <Navbar />

      <main className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 mb-6 animate-fadeIn">
              🦖 DINO GAME
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 font-medium max-w-2xl mx-auto leading-relaxed">
              Jump, run, and survive in the ultimate prehistoric adventure! Test
              your reflexes in this thrilling dinosaur survival game.
            </p>
          </div>

          {/* Game Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16 mb-16">
            <div className="order-2 lg:order-1">
              <ScoreDisplay highestScore={highestScore} />
            </div>

            <div className="order-1 lg:order-2">
              <GameButton onStartGame={handleStartGame} />
            </div>

            <div className="order-3 lg:order-3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">
                Game Stats
              </h3>
              <div className="space-y-3 text-emerald-700">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Games Played:</span>
                  <span className="font-bold">
                    {highestScore > 0 ? "1+" : "0"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Difficulty:</span>
                  <span className="font-bold text-orange-600">Dynamic</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Status:</span>
                  <span className="font-bold text-green-600">Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-lg font-bold text-emerald-800 mb-2 text-center">
                Lightning Fast
              </h3>
              <p className="text-emerald-600 text-center">
                Responsive controls for the ultimate gaming experience
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🏆</div>
              <h3 className="text-lg font-bold text-emerald-800 mb-2 text-center">
                Competitive
              </h3>
              <p className="text-emerald-600 text-center">
                Compete with players worldwide on the leaderboard
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🎮</div>
              <h3 className="text-lg font-bold text-emerald-800 mb-2 text-center">
                Addictive
              </h3>
              <p className="text-emerald-600 text-center">
                Simple to learn, impossible to master gameplay
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

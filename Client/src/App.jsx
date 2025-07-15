// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GameButton from './components/GameButton';
import ScoreDisplay from './components/ScoreDisplay';
import Home from './components/Home';

function App() {
  // If you want to manage state at the App level, you can do so here
  const [highestScore, setHighestScore] = useState(0);

  const handleStartGame = () => {
    const newScore = Math.floor(Math.random() * 5000) + 100;
    if (newScore > highestScore) {
      setHighestScore(newScore);
    }
    console.log('Starting game...');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* You can set up routing here when you add more pages */}
        <Home 
          highestScore={highestScore} 
          onStartGame={handleStartGame} 
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
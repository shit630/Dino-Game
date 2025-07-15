import React, { useEffect, useRef, useState } from "react";
import Dino from "../components/Dino";
import Obstacle from "../components/Obstacle";
import axios from "axios";

const GamePage = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [highScoreMessage, setHighScoreMessage] = useState("");

  const gameBoxRef = useRef(null);
  const dinoRef = useRef(null);
  const obstacleRefs = useRef({});

  //jump logic
  const handleJump = () => {
    if (isJumping || !isPlaying || isGameOver) {
      return;
    }
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 600);
  };

  // Keyboard handler
  useEffect(() => {
    const handelKeyDown = (e) => {
      if (e.code === "Space") {
        handleJump();
      }
    };
    window.addEventListener("keydown", handelKeyDown);
    return () => window.removeEventListener("keydown", handelKeyDown);
  }, [isJumping, isPlaying, isGameOver]);

  // Spawn obstacles
  useEffect(() => {
    if (!isPlaying || isGameOver) {
      return;
    }
    const intervel = setInterval(() => {
      const boxWidth = gameBoxRef.current?.offsetWidth || 600;
      setObstacles((prev) => [...prev, { id: Date.now(), left: boxWidth }]);
    }, 2000);
    return () => clearInterval(intervel);
  }, [isPlaying, isGameOver]);

  // Move obstacles + Collision Check
  useEffect(() => {
    if (!isPlaying || isGameOver) {
      return;
    }
    const moveInterval = setInterval(() => {
      const dinoBox = dinoRef.current?.getBoundingClientRect();
      setObstacles((prev) =>
        prev
          .map((obs) => {
            const newLeft = obs.left - 5;

            // Prevent false positive scoring right after obstacle spawns
            const dinoX = dinoBox?.left || 0;
            const dinoWidth = dinoBox?.width || 50; // fallback to 50 if undefined
            const obsWidth = 40;

            const hasCrossedDino = newLeft + obsWidth < dinoX;

            if (!obs.passed && hasCrossedDino) {
              setScore((prevScore) => prevScore + 1);
              return { ...obs, left: newLeft, passed: true };
            }

            return { ...obs, left: newLeft };
          })
          .filter((obs) => obs.left > -50)
      );

      //Collision detecion
      Object.values(obstacleRefs.current).forEach((ob) => {
        const obsBox = ob?.getBoundingClientRect();
        if (dinoBox && obsBox) {
          const isColliding =
            dinoBox.left < obsBox.right &&
            dinoBox.right > obsBox.left &&
            dinoBox.top < obsBox.bottom &&
            dinoBox.bottom > obsBox.top;
          if (isColliding) {
            handleGameOver();
          }
        }
      });
    }, 20);
    return () => clearInterval(moveInterval);
  }, [isPlaying, isGameOver]);

  // handle Game over
  const handleGameOver = async () => {
    console.log("COLLISION DETECTED");
    setIsGameOver(true);
    setIsPlaying(false);
    try {
      const resp = await axios.post(
        `http://localhost:8080/scores/highest-score`,
        {
          score: score,
        }
      );
      if (resp.data.message) {
        setHighScoreMessage(resp.data.message);
      }

      // Clear the message after 3 seconds
      setTimeout(() => {
        setHighScoreMessage("");
      }, 3000);
    } catch (error) {
      console.error("Failed to post score:", error);
    }
  };

  // Reset Game
  const handleReset = () => {
    setObstacles([]);
    setIsJumping(false);
    setIsGameOver(false);
    setIsPlaying(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-blue-100 px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">🦖 Dino Game</h1>
      <h2 className="text-xl font-semibold mb-4">🏆 Score: {score}</h2>
      {highScoreMessage && (
        <div className="mb-4 px-4 py-2 bg-green-100 text-green-700 rounded shadow text-center max-w-[600px]">
          {highScoreMessage}
        </div>
      )}

      {/* Game Box */}
      <div
        ref={gameBoxRef}
        className="w-full max-w-[600px] aspect-[16/9] bg-white rounded-xl shadow-lg border-2 border-gray-300 relative overflow-hidden"
        onClick={handleJump}
      >
        <Dino isJumping={isJumping} dinoRef={dinoRef} />

        {obstacles.map((obs) => (
          <Obstacle
            key={obs.id}
            left={obs.left}
            ref={(el) => (obstacleRefs.current[obs.id] = el)}
          />
        ))}

        {/* Game Over Message */}
        {isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
            <p className="text-3xl text-white font-bold">💥 Game Over</p>
          </div>
        )}

        {/*  Instruction Text */}
        {!isPlaying && !isGameOver && (
          <p className="absolute inset-0 flex items-center justify-center text-gray-300 text-xl">
            Press Play to Start
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 shadow"
          onClick={handleReset}
        >
          Reset Game
        </button>
        <button
          onClick={() => {
            if (!isGameOver) {
              setIsPlaying((prev) => !prev);
            }
          }}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default GamePage;

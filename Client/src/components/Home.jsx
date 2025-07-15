// src/pages/Home.jsx
import Footer from "../components/Footer";
import GamePage from "../pages/GamePage";

function Home() {
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
          <div className="mb-5">
            <GamePage />
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

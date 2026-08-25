import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-3">
        chatengo
      </h1>
      <p className="text-gray-400 text-lg mb-10 max-w-md">
        Come and Meet new people in an anonymous environment.
      </p>

      <button
        onClick={() => navigate("/setup")}
        className="px-8 py-3 m-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors"
      >
        Start Chatting
      </button>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl text-sm text-gray-400">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🕶️</span>
          <p>Fully anonymous</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">💬</span>
          <p>Match with interesting people</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🛡️</span>
          <p>Fully Monitored 24/7</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

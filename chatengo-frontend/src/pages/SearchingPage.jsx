import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SearchingPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [dots, setDots] = useState("");

  const nickname = state?.nickname ?? "Anonymous";
  const preference = state?.preference ?? "any";
  const hobbies = state?.hobbies ?? [];

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Simulate matchmaking — replace with real WebSocket/API call later
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/chat", { state: { nickname, preference, hobbies } });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigate, nickname, preference, hobbies]);

  const handleCancel = () => {
    navigate("/setup");
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6 text-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8">
        <div className="absolute inset-0 rounded-full bg-indigo-600/30 animate-ping" />
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl">
          🔍
        </div>
      </div>

      <h1 className="text-xl font-semibold text-gray-100 mb-2">
        Looking for someone{dots}
      </h1>
      <p className="text-gray-400 text-sm mb-1">
        Matching you with someone who shares your interests...
      </p>

      <button
        onClick={handleCancel}
        className="mt-10 text-sm text-gray-400 hover:text-gray-200 border border-gray-800 rounded-full px-5 py-2 transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}

export default SearchingPage;

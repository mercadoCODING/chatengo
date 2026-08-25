import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HobbiesInput from "../components/HobbiesInput";

function SetupPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [preference, setPreference] = useState("any");
  const [hobbies, setHobbies] = useState([]); // ← now an array

  const preferences = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "any", label: "Any" },
  ];

  const handleStart = () => {
    if (!nickname.trim()) return;
    navigate("/chat", {
      state: {
        nickname: nickname.trim(),
        preference,
        hobbies, // already an array
      },
    });
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-100">
            Set up your chat
          </h1>
          <p className="text-gray-400 text-sm mt-1 text-center">
            Tell us a bit about yourself before we find you a match.
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-sm text-gray-300 mb-1.5">Nickname</label>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={20}
            placeholder="e.g. NightOwl23"
            className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm text-gray-300 mb-1.5">
            Match with
          </label>
          <div className="grid grid-cols-3 gap-2">
            {preferences.map((p) => (
              <button
                key={p.value}
                onClick={() => setPreference(p.value)}
                className={`py-2 rounded-xl text-sm font-medium border transition-colors ${
                  preference === p.value
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm text-gray-300 mb-1.5">
            Hobbies / interests{" "}
            <span className="text-gray-500">(optional)</span>
          </label>
          <HobbiesInput hobbies={hobbies} setHobbies={setHobbies} />
          <p className="text-xs text-gray-500 mt-1.5">
            Press Enter or comma to add — we'll try to match you with similar
            interests.
          </p>
        </div>

        <button
          onClick={handleStart}
          disabled={!nickname.trim()}
          className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-800 disabled:text-gray-500 text-white font-medium rounded-full transition-colors"
        >
          Find a match
        </button>
      </div>
    </div>
  );
}

export default SetupPage;

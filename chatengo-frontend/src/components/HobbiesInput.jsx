import { useState } from "react";

function HobbiesInput({ hobbies, setHobbies }) {
  const [input, setInput] = useState("");

  const addHobby = () => {
    const value = input.trim();
    if (!value) return;
    if (hobbies.includes(value)) {
      setInput("");
      return;
    }
    setHobbies([...hobbies, value]);
    setInput("");
  };

  const removeHobby = (hobby) => {
    setHobbies(hobbies.filter((h) => h !== hobby));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addHobby();
    } else if (e.key === "Backspace" && !input && hobbies.length > 0) {
      // quick-delete last tag when input is empty
      setHobbies(hobbies.slice(0, -1));
    }
  };

  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3 py-2 flex flex-wrap gap-2 items-center focus-within:border-indigo-500">
      {hobbies.map((hobby) => (
        <span
          key={hobby}
          className="flex items-center gap-1 bg-indigo-600/20 text-indigo-300 text-xs px-2.5 py-1 rounded-full"
        >
          {hobby}
          <button
            onClick={() => removeHobby(hobby)}
            className="text-indigo-300 hover:text-white ml-0.5"
          >
            ✕
          </button>
        </span>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={addHobby}
        placeholder={hobbies.length === 0 ? "e.g. music, gaming, hiking" : ""}
        className="flex-1 min-w-[100px] bg-transparent text-sm text-gray-100 placeholder-gray-500 outline-none py-1"
      />
    </div>
  );
}

export default HobbiesInput;

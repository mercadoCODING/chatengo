import { useState } from "react";

function ChatInput({ onSend, onEnd }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="px-3 pb-2 pt-2 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <button
          onClick={onEnd}
          className="flex items-center gap-1 text-sm text-red-500 border border-red-200 rounded-full px-3 py-1.5 hover:bg-red-50 shrink-0"
        >
          End
        </button>

        <div className="flex-1 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1.5">
          <button className="text-gray-400 hover:text-gray-600 text-lg">
            📎
          </button>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-sm outline-none py-1.5"
          />
          <button className="text-gray-400 hover:text-gray-600 text-lg">
            🙂
          </button>
          <button
            onClick={handleSend}
            className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;

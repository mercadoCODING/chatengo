function MessageBubble({ text, isMine, time }) {
  return (
    <div
      className={`flex flex-col px-4 mb-3 ${isMine ? "items-end" : "items-start"}`}
    >
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm text-left ${
          isMine
            ? "bg-indigo-600 text-white rounded-br-md"
            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"
        }`}
      >
        {text}
      </div>
      <span className="text-[11px] text-gray-400 mt-1 px-1">{time}</span>
    </div>
  );
}

export default MessageBubble;

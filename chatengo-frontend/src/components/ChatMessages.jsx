import MessageBubble from "./MessageBubble";

function ChatMessages({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
      {messages.map((msg, i) => (
        <MessageBubble key={i} text={msg.text} isMine={msg.isMine} />
      ))}
    </div>
  );
}

export default ChatMessages;

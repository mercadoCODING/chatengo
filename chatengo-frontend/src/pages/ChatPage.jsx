import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import ChatHeader from "../components/ChatHeader";
import UserBar from "../components/UserBar";
import SystemNotice from "../components/SystemNotice";
import MessageBubble from "../components/MessageBubble";
import ChatFooter from "../components/ChatFooter";
import ChatInput from "../components/ChatInput";

function ChatPage() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { text: "Hey there! You found someone.", isMine: false, time: "10:42 AM" },
    {
      text: "Hi! What brings you to Chatengo?",
      isMine: true,
      time: "10:42 AM",
    },
    {
      text: "Just taking a break and looking to meet someone new.",
      isMine: false,
      time: "10:43 AM",
    },
  ]);

  const handleSend = (text) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prev) => [...prev, { text, isMine: true, time }]);
  };

  const handleEnd = () => {
    // later: notify Spring Boot backend the chat ended
    navigate("/");
  };

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="w-full max-w-[500px] bg-white dark:bg-gray-900 flex flex-col min-h-screen">
        <UserBar />
        <div className="flex-1 overflow-y-auto">
          <SystemNotice text="Your chat is anonymous. Be kind and stay safe." />
          {messages.map((msg, i) => (
            <MessageBubble key={i} {...msg} />
          ))}
        </div>
        <ChatInput onSend={handleSend} onEnd={handleEnd} />
        <ChatFooter />
      </div>
    </div>
  );
}

export default ChatPage;

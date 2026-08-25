import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SetupPage from "./pages/SetupPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/setup" element={<SetupPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;

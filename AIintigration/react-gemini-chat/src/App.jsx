import { ChatProvider } from "./context/ChatContext";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

export default function App() {
  return (
    <ChatProvider>
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        maxWidth: "600px",
        margin: "auto",
        border: "1px solid #ddd"
      }}>
        <ChatWindow />
        <ChatInput />
      </div>
    </ChatProvider>
  );
}

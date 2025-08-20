import { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";
import MessageBubble from "./MessageBubble";

export default function ChatWindow() {
  const { messages } = useChat();
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
      {messages.map((m, i) => (
        <MessageBubble key={i} {...m} />
      ))}
      <div ref={endRef} />
    </div>
  );
}

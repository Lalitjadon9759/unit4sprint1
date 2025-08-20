import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatHistory");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (role, text) => {
    setMessages((prev) => [...prev, { role, text, timestamp: new Date() }]);
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, loading, setLoading, error, setError }}
    >
      {children}
    </ChatContext.Provider>
  );
};

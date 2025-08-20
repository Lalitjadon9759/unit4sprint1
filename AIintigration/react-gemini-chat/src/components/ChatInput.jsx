import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { sendToGemini } from "../api/gemini";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const { addMessage, messages, loading, setLoading, setError } = useChat();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage("user", input);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const aiResponse = await sendToGemini([...messages, { role: "user", text: input }]);
      addMessage("assistant", aiResponse);
    } catch {
      setError("Failed to get response. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSend} style={{ display: "flex", padding: "1rem" }}>
      <input
        type="text"
        value={input}
        disabled={loading}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ flex: 1, padding: "0.5rem" }}
      />
      <button disabled={loading} type="submit" style={{ marginLeft: "0.5rem" }}>
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
}

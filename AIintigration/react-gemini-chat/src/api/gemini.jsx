import axios from "axios";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";

export const sendToGemini = async (messages) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gemini-1.5-flash",
        messages: messages.map((m) => ({
          role: m.role,
          content: [{ text: m.text }]
        })),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content[0].text;
  } catch (err) {
    console.error("Gemini API error:", err);
    throw err;
  }
};

import React, { useState } from 'react';
import CorrectedText from './CorrectedText';

export default function AutoCorrect() {
  const [inputText, setInputText] = useState("");

  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their"
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>AutoCorrect App</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your text here..."
        style={{ padding: "8px", width: "100%", maxWidth: "500px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <h4>Corrected Preview:</h4>
        <CorrectedText text={inputText} corrections={corrections} />
      </div>
    </div>
  );
}

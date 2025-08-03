import React from 'react';

export default function CorrectedText({ text, corrections }) {
  const words = text.split(" ");

  let correctionCount = 0;

  const correctedWords = words.map(word => {
    const corrected = corrections[word];
    if (corrected) {
      correctionCount++;
      return corrected;
    }
    return word;
  });

  return (
    <div>
      <p style={{ fontSize: "1.1rem" }}>{correctedWords.join(" ")}</p>
      <p style={{ color: "gray", fontSize: "0.9rem" }}>
        {correctionCount} {correctionCount === 1 ? "word" : "words"} corrected
      </p>
    </div>
  );
}

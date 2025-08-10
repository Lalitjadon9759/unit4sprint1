import React, { useRef, useState } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "#f0f8ff";
      setFocused(true);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        onClick={handleFocus}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Focus Input
      </button>
      {focused && <p style={{ marginTop: "10px", color: "green" }}>Focused!</p>}
    </div>
  );
}

export default FocusInput;

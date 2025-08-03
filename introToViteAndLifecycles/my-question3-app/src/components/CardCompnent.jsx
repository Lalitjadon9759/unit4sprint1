import React from 'react';

export default function CardCompnent({
  name = "Anonymous",
  age,
  bio = "This user prefers to keep an air of mystery about them."
}) {
  const truncateBio = (text) => {
    return text.length > 100 ? text.slice(0, 100) + "… Read More" : text;
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "350px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    margin: "20px auto"
  };

  const nameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "8px"
  };

  const ageStyle = {
    color: "#555",
    marginBottom: "12px"
  };

  const bioStyle = {
    fontSize: "1rem",
    color: "#333"
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <div style={bioStyle}>{truncateBio(bio)}</div>
    </div>
  );
}

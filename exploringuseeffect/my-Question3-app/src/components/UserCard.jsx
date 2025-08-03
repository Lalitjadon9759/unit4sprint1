import React from 'react';

export default function UserCard({ name, email, city }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}

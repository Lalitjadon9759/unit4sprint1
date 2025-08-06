import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) navigate(`/weather/${city}`);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}

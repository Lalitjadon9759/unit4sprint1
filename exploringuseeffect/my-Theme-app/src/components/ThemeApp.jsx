import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

export default function ThemeApp() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const appStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    transition: '0.3s',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={appStyle}>
      <h2>Theme Toggle App</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      <div style={{ marginTop: '20px', display: 'flex', gap: '16px' }}>
        <ThemedBox theme={theme} text="Box 1" />
        <ThemedBox theme={theme} text="Box 2" />
        <ThemedBox theme={theme} text="Box 3" />
      </div>
    </div>
  );
}

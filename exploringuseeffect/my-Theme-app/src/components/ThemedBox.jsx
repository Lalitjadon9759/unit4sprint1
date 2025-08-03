import React from 'react';

export default function ThemedBox({ theme, text }) {
  const styles = {
    padding: '20px',
    borderRadius: '8px',
    width: '100px',
    textAlign: 'center',
    transition: '0.3s',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    boxShadow: theme === 'light'
      ? '0 2px 6px rgba(0,0,0,0.1)'
      : '0 2px 6px rgba(255,255,255,0.1)'
  };

  return <div style={styles}>{text}</div>;
}

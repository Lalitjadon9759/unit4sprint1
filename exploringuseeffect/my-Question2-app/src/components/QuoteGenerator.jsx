import React, { useEffect, useState } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Failed to fetch quote:", err);
    }
    setLoading(false);
  };

  // Initial fetch and set interval for auto-refresh every 30 seconds
  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000); // 30 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div style={styles.container}>
      <h2>Daily Quote Generator</h2>

      {loading ? (
        <div style={styles.spinner}></div>
      ) : quote ? (
        <div style={styles.quoteBox}>
          <p style={styles.content}>"{quote.content}"</p>
          <p style={styles.author}>— {quote.author}</p>
        </div>
      ) : (
        <p>No quote loaded yet.</p>
      )}

      <button onClick={fetchQuote} style={styles.button}>Get New Quote</button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto'
  },
  quoteBox: {
    margin: '20px 0',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f2f2f2',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  content: {
    fontSize: '1.2rem',
    fontStyle: 'italic'
  },
  author: {
    marginTop: '10px',
    color: '#555'
  },
  button: {
    padding: '10px 16px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none'
  },
  spinner: {
    margin: '20px auto',
    width: '40px',
    height: '40px',
    border: '4px solid #ccc',
    borderTop: '4px solid #007BFF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }
};

// Inject basic spinner keyframes into global styles
const style = document.createElement('style');
style.textContent = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

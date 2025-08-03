import React, { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio('https://www.soundjay.com/button/beep-07.wav'));

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current); // cleanup
  }, [running]);

  useEffect(() => {
    if (seconds === targetTime) {
      if (audioRef.current) {
        audioRef.current.play().catch(() => console.log('Sound playback blocked'));
      } else {
        console.log(`⏰ Time reached: ${targetTime} seconds`);
      }
    }
  }, [seconds, targetTime]);

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div style={styles.container}>
      <h2>⏱️ Stopwatch</h2>

      <div style={styles.timeDisplay}>{seconds} seconds</div>

      <div style={styles.buttons}>
        <button onClick={() => setRunning(true)} disabled={running}>Start</button>
        <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <label>Set Target Time (seconds): </label>
        <input
          type="number"
          value={targetTime}
          onChange={e => setTargetTime(Number(e.target.value))}
          min="1"
          style={{ width: '60px' }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto'
  },
  timeDisplay: {
    fontSize: '2rem',
    margin: '20px 0'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  }
};

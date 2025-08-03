import React, { useState } from 'react';

export default function ToggleButton({ label }) {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(prev => !prev);
  };

  const buttonStyle = {
    color: isOn ? 'green' : 'red',
    fontWeight: 'bold',
    marginLeft: '10px',
    cursor: 'pointer',
    border: '1px solid',
    padding: '5px 10px',
    borderRadius: '5px',
    background: 'white'
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {label && <span>{label}</span>}
      <button onClick={toggleState} style={buttonStyle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

import React, { useState } from 'react';

const TrafficCapture = () => {
  const [onionUrl, setOnionUrl] = useState('');
  const [captureStatus, setCaptureStatus] = useState('No data');

  const handleCapture = () => {
    setCaptureStatus('Capturing...');
    // Implement capture logic here
  };

  const pageStyle = {
    padding: '20px',
    backgroundColor: '#ecf0f1',
    borderRadius: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <h2>Network Traffic Capture</h2>
      <input
        type="text"
        value={onionUrl}
        onChange={(e) => setOnionUrl(e.target.value)}
        placeholder="Enter .onion URL"
        style={inputStyle}
      />
      <button onClick={handleCapture} style={buttonStyle}>Start Capture</button>
      <p>Status: {captureStatus}</p>
    </div>
  );
};

export default TrafficCapture;

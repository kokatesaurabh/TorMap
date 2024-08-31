// src/components/RealTimeComponent.js
import React, { useEffect, useState } from 'react';
import { onMessage, sendMessage } from '../services/socket';

const RealTimeComponent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    onMessage((newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []);

  const handleSend = () => {
    sendMessage('Hello, World!');
  };

  return (
    <div>
      <button onClick={handleSend}>Send Message</button>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeComponent;

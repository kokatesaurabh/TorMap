// src/services/socket.js
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your backend URL

export const sendMessage = (message) => {
  socket.emit('event_name', message);
};

export const onMessage = (callback) => {
  socket.on('event_name', (data) => {
    callback(data);
  });
};

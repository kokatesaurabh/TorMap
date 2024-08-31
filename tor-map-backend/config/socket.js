// config/socket.js

let io;

const setupSocketIO = (server) => {
  io = require('socket.io')(server, {
    cors: {
      origin: "*", // Adjust this according to your environment
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Example: Listening to a custom event from the client
    socket.on('exampleEvent', (data) => {
      console.log('Received data:', data);
      // Broadcast the data to all connected clients
      io.emit('exampleEventResponse', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};

const emitEvent = (event, data) => {
  if (io) {
    io.emit(event, data);
  }
};

module.exports = { setupSocketIO, emitEvent };

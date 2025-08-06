const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Socket.IO server setup
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // ✅ Match your React app
    methods: ['GET', 'POST']
  }
});


io.on('connection', (socket) => {
  console.log('🟢 New client connected:', socket.id);

  socket.on('send_message', (data) => {
    console.log('📩 Message received:', data);
    io.emit('receive_message', data); // 💥 Send to all clients (including sender)
  });

  socket.on('disconnect', () => {
    console.log('🔴 Client disconnected:', socket.id);
  });
});


// Start server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

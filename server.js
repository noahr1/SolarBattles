const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'https://noahr1.github.io/SolarBattles/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and authentication headers
}));
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' directory
app.use(express.static('docs'));

// Set the environment variable in the rendering context
app.use((req, res, next) => {
    res.locals.environment = process.env.NODE_ENV || 'development';
    next();
});
  
// Serve the HTML file and include the environment variable
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/docs/index.html', { environment: res.locals.environment });
});

// Handle Socket.io connections
io.on('connection', (socket) => {
  //console.log('A user connected');

  // Handle chat messages
  socket.on('chat message', (msg) => {
    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnects
  /*socket.on('disconnect', () => {
    //console.log('User disconnected');
  });*/
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
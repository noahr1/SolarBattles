// Connect to the Socket.io server
const socket = io();


// Handle form submission for chat messages
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const messageInput = document.getElementById('m');
  const message = messageInput.value.trim();

  if (message) {
    // Emit a chat message event to the server
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

console.log(environment === 'production' ? 'https://noahr1.github.io/SolarBattles' : 'http://localhost:3000');

// Handle incoming chat messages
socket.on('chat message', function(msg) {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});
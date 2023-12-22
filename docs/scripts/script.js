// Connect to the Socket.io server
const socket = io(environment === 'production' ? 'https://noahr1.github.io/SolarBattles' : 'http://localhost:3000');


import io from 'socket.io-client';

const socket = io('https://e-commerse-fc.onrender.com', {
    path: '/api/shoes', // Si el servidor Socket.io está montado en una ruta específica
    withCredentials: true, // Esto permite el uso de cookies de sesión si es necesario
  });
  

export default socket;
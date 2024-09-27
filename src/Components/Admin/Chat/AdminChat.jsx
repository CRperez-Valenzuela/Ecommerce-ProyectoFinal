import { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../../Socket/SocketContext';
import styles from './AdminChat.module.css';

const AdminChat = ({ selectedUserId }) => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    if (selectedUserId) {
      socket.emit('joinRoom', selectedUserId); // Unirse a la sala del usuario

      socket.on('userMessage', (message) => {
        setChat(prevChat => [...prevChat, { sender: 'User', message }]);
      });

      return () => {
        socket.off('userMessage');
      };
    }
  }, [socket, selectedUserId]);

  const sendMessage = () => {
    if (selectedUserId && message.trim()) {
      socket.emit('adminMessage', { userId: selectedUserId, message });
      setChat(prevChat => [...prevChat, { sender: 'Admin', message }]);
      setMessage('');
    }
  };

  return (
    <div className={styles.chatContainer} style={{ display: minimized ? 'none' : 'flex' }}>
      <div className={styles.chatBox}>
        <div className={styles.chatHeader}>
          <h3>Chat con Usuario</h3>
          
        </div>
        <div className={styles.chatMessages}>
          {chat.map((msg, index) => (
            <div key={index} className={styles.chatMessage}>
              <strong>{msg.sender}:</strong> {msg.message}
            </div>
          ))}
        </div>
        <div className={styles.chatInput}>
          <input
            className={styles.chatInputText}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button className={styles.sendButton} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
      {minimized && (
        <button className={styles.minimizeButton} onClick={() => setMinimized(false)}>
          Chat
        </button>
      )}
    </div>
  );
};

export default AdminChat;
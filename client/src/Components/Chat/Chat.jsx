
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ScrollPanel } from "primereact/scrollpanel";
import socket from "../Socket/Socket"
import styles from "./Chat.module.css";

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [minimized, setMinimized] = useState(true);
  const userId = 'someUserId'; // Asegúrate de obtener el ID del usuario de manera segura

  useEffect(() => {
    socket.emit('joinRoom', userId); // Unirse a la sala del usuario

    socket.on("userMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'Admin', message }]);
    });

    return () => {
      socket.off("userMessage");
    };
  }, [userId]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      socket.emit("userMessage", { userId, message: newMessage });
      setMessages((prevMessages) => [...prevMessages, { sender: 'You', message: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className={styles.chatContainer}>
      {minimized ? (
        <Button
          icon="pi pi-headphones"
          className={`${styles.chatMinimizedButton} p-button-rounded p-button-primary`}
          onClick={() => setMinimized(false)}
        />
      ) : (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <h3>Chat de Ayuda</h3>
            <Button
              icon="pi pi-minus"
              className="p-button-rounded p-button-text"
              onClick={() => setMinimized(true)}
            />
          </div>
          <ScrollPanel className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={styles.chatMessage}>
                {msg.sender}: {msg.message}
              </div>
            ))}
          </ScrollPanel>
          <div className={styles.chatInput}>
            <InputText
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className={styles.chatInputText}
              placeholder="¿En que podemos ayudarte?"
            />
            <Button
              icon="pi pi-send"
              className="p-button-rounded p-button-text"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

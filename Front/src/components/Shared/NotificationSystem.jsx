import React from 'react';
import '../../styles/notification.css';

const NotificationSystem = ({ message, type }) => {
  const getText = (msg) => {
    if (typeof msg === 'string') return msg;
    if (msg instanceof Error) return msg.message;
    return String(msg); // fallback general
  };

  return (
    <div className={`notification-message ${type}`}>
      {getText(message)}
    </div>
  );
};

export default NotificationSystem;

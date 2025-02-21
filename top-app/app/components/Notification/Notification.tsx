import React from "react";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px",
        backgroundColor: "#d4edda",
        color: "#155724",
        border: "1px solid #c3e6cb",
        borderRadius: "5px",
        zIndex: 1000,
      }}
    >
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: "10px",
          background: "none",
          border: "none",
          color: "#155724",
          cursor: "pointer",
        }}
      >
        Закрыть
      </button>
    </div>
  );
};

export default Notification;

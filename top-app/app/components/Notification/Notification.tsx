import React, { useEffect, useRef } from "react";
import styles from "./Notification.module.css";
import { NotificationProps } from "./Notification.props";

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.notification} role="alert" aria-live="assertive">
      {message}
      <button
        onClick={onClose}
        className={styles.closeButton}
        ref={buttonRef}
        aria-label="Закрыть уведомление"
      >
        Закрыть
      </button>
    </div>
  );
};

export default Notification;

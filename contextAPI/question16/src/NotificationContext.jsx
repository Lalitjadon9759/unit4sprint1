import React, { createContext, useState, useEffect, useRef } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const intervalRef = useRef(null);
  const idRef = useRef(1);

  const addNotification = () => {
    setNotifications(prev => [
      ...prev,
      {
        id: idRef.current++,
        message: 'You have a new message!',
        read: false,
      },
    ]);
  };
  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(addNotification, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const stopNotifications = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        markAllAsRead,
        stopNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

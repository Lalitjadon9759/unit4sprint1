import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const NotificationList = () => {
  const { notifications, markAllAsRead, stopNotifications } = useContext(NotificationContext);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length === 0 && <p>No notifications yet.</p>}
      <ul>
        {notifications.map(n => (
          <li
            key={n.id}
            style={{
              fontWeight: n.read ? 'normal' : 'bold',
              backgroundColor: n.read ? '#fff' : '#e0f7fa',
              padding: '5px',
              marginBottom: '5px',
              borderRadius: '4px'
            }}
          >
            {n.message}
          </li>
        ))}
      </ul>
      <button onClick={markAllAsRead}>Mark All as Read</button>
      <button onClick={stopNotifications} style={{ marginLeft: '10px' }}>
        Stop Notifications
      </button>
    </div>
  );
};

export default NotificationList;

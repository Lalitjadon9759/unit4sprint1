import React from 'react';
import { NotificationProvider } from './NotificationContext';
import NotificationList from './NotificationList';

function App() {
  return (
    <NotificationProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Real-Time Notification Panel</h1>
        <NotificationList />
      </div>
    </NotificationProvider>
  );
}

export default App;

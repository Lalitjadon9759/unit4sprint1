import React from 'react';
import { useAuth } from './authContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useAuth();
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

const Main = () => {
  const { isAuthenticated } = useAuth();
  return (
    <main style={{ padding: '20px' }}>
      <h1>{isAuthenticated ? 'You are logged in!' : 'Please log in to continue.'}</h1>
    </main>
  );
};

const Footer = () => {
  const { isAuthenticated } = useAuth();
  return (
    <footer style={{ padding: '10px', background: '#eee' }}>
      {isAuthenticated ? 'Welcome, User' : 'Please log in'}
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default App;

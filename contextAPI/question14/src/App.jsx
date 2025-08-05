import React, { createContext, useContext, useState } from 'react';
import './index.css'; // Tailwind CSS

// --- Contexts ---
const AuthContext = createContext();
const ThemeContext = createContext();

const useAuth = () => useContext(AuthContext);
const useTheme = () => useContext(ThemeContext);

// --- Providers ---
const AppProviders = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggleLogin = () => setIsLoggedIn(prev => !prev);
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
          {children}
        </div>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

// --- Components ---
const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useAuth();
  const { toggleTheme } = useTheme();
  return (
    <nav className="flex justify-between p-4 shadow bg-inherit">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex gap-3">
        <span>{isLoggedIn ? 'Logged In' : 'Logged Out'}</span>
        <button onClick={toggleLogin} className="border px-2 rounded">Toggle Login</button>
        <button onClick={toggleTheme} className="border px-2 rounded">Toggle Theme</button>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <aside className="hidden md:block w-64 bg-gray-200 dark:bg-gray-800 p-4">
      <h2 className="font-bold text-lg">Sidebar</h2>
      {isLoggedIn && <p className="mt-2">Welcome, User!</p>}
    </aside>
  );
};

const MainContent = () => {
  const products = Array.from({ length: 8 }, (_, i) => `Product ${i + 1}`);
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
      {products.map((item, idx) => (
        <div key={idx} className="p-4 border rounded shadow bg-inherit">{item}</div>
      ))}
    </main>
  );
};

const Footer = () => (
  <footer className="p-4 text-center bg-gray-300 dark:bg-gray-700">
    <p>© 2025 Dashboard</p>
  </footer>
);

// --- Main App ---
const App = () => {
  return (
    <AppProviders>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </AppProviders>
  );
};

export default App;

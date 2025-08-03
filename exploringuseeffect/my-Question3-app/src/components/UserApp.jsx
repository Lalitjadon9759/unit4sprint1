import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function UserApp() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user data on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Oops! Something went wrong. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Filter users by search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>User Profiles</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      {loading && <p>Loading users...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.userGrid}>
        {!loading && !error && filteredUsers.length === 0 && (
          <p>No users found.</p>
        )}
        {!loading && !error && filteredUsers.map(user => (
          <UserCard key={user.id} name={user.name} email={user.email} city={user.address.city} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto'
  },
  searchInput: {
    padding: '8px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '300px'
  },
  error: {
    color: 'red',
    marginTop: '10px'
  },
  userGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px'
  }
};

import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

const Settings = () => {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button style={{ marginTop: '15px' }} type="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;

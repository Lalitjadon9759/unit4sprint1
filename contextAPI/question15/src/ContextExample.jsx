import React, { useContext, useState, createContext } from 'react';

const UserContext = createContext();

const Child = () => {
  const user = useContext(UserContext);
  return <h2>Hello, {user}!</h2>;
};

const Middle = () => {
  return <Child />;
};

const Parent = () => {
  return <Middle />;
};

const ContextExample = () => {
  const [user] = useState('Lalit');

  return (
    <UserContext.Provider value={user}>
      <h1>Context API Example</h1>
      <Parent />
    </UserContext.Provider>
  );
};

export default ContextExample;

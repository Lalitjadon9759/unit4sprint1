import React, { useState } from 'react';

const Child = ({ user }) => {
  return <h2>Hello, {user}!</h2>;
};

const Middle = ({ user }) => {
  return <Child user={user} />;
};

const Parent = ({ user }) => {
  return <Middle user={user} />;
};

const PropDrillingExample = () => {
  const [user] = useState('Lalit');

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Parent user={user} />
    </div>
  );
};

export default PropDrillingExample;

import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Dashboard</h1>
      <span
        style={{
          backgroundColor: user ? 'green' : 'red',
          color: 'white',
          padding: '4px 8px'
        }}
      >
        {user ? 'Online' : 'Offline'}
      </span>
    </>
  );
};

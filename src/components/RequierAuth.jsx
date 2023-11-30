import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export const RequierAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) return <Navigate to="/login" />;
  return children;
};

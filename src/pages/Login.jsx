import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Logins</h1>
      <p>{user ? 'Online' : 'Offline'}</p>
      <button onClick={() => setUser((prev) => !prev)}>Cambiar</button>
    </div>
  );
};

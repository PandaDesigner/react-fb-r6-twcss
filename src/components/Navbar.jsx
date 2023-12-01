import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

export const Navbar = () => {
  const { user, logoutUser } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      logoutUser();
    } catch (error) {
      console.log('%c' + error, 'background:red; color:white');
    }
  };
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      {!user && <NavLink to={'/login'}>Login</NavLink>}
      {!user && <NavLink to={'/register'}>Register</NavLink>}
      {user && <NavLink to={'/blog'}>Blog</NavLink>}
      {user && <NavLink to={'/dashboard'}>Dashboard</NavLink>}
      {user && (
        <button
          onClick={logoutUser}
          style={{
            background: 'orange'
          }}
        >
          singout user
        </button>
      )}
    </div>
  );
};

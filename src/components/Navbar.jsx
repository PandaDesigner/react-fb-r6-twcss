import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

export const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      {user && <NavLink to={'/blog'}>Blog</NavLink>}
    </div>
  );
};

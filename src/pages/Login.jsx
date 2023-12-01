import { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [userData, setUserData] = useState({
    email: 'pedro@test.com',
    password: '123123'
  });
  const { user, setUser, loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(userData);
      console.log('%cUsuario logiado', 'background:green; color:white');
      setUser(true);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      console.log('%c' + error, 'background:red; color:white');
    }
  };

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
        marginTop: '100px',
        padding: '20px',
        background: '#f1f1f1',
        borderRadius: '10px'
      }}
    >
      <h1>Logins</h1>
      <form
        style={{
          display: 'flex',
          width: '60%',
          flexDirection: 'column',
          gap: 8
        }}
        onSubmit={handlerSubmit}
      >
        <input
          type="email"
          placeholder="Ingrese su email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

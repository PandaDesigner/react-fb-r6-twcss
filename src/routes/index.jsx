import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { BlogPrivate } from '../pages/BlogPrivate';
import { Navbar } from '../components/Navbar';
import { RequierAuth } from '../components/RequierAuth';
import { Registre } from '../pages/Registre';
import { Dashboard } from '../pages/Dashboard';
import { UserContext } from '../context/UserProvider';

export const Rutas = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registre />} />
        <Route
          path="/blog"
          element={
            <RequierAuth>
              <BlogPrivate />
            </RequierAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequierAuth>
              <Dashboard />
            </RequierAuth>
          }
        />
      </Routes>
    </>
  );
};

import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { BlogPrivate } from '../pages/BlogPrivate';
import { Navbar } from '../components/Navbar';
import { RequierAuth } from '../components/RequierAuth';
import { Registre } from '../pages/Registre';
import { Dashboard } from '../pages/Dashboard';

export const Rutas = () => {
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

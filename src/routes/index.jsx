import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { BlogPrivate } from '../pages/BlogPrivate';
import { Navbar } from '../components/Navbar';
import { RequierAuth } from '../components/RequierAuth';

export const Rutas = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/blog"
          element={
            <RequierAuth>
              <BlogPrivate />
            </RequierAuth>
          }
        />
      </Routes>
    </>
  );
};

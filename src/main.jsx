import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserProvider.jsx';

import { Rutas } from './routes/index.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

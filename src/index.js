import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './App';
import { RouterProvider } from 'react-router-dom';
import Theme from './components/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Theme>
);
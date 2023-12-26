import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-ride-ts">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

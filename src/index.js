import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RootContext from './pages/context/RootContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RootContext>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </RootContext>
);


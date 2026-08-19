import React from 'react';
import { createRoot } from 'react-dom/client';
import SemPocheteLanding from './SemPocheteLanding.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SemPocheteLanding />
  </React.StrictMode>
);

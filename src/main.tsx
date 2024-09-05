import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/providers/ThemeProvider';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

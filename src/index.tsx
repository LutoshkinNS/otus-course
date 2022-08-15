import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';

import App from './App';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

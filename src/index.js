// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';
import './styles/globals.css';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

// Import ArcGIS CSS
import '@arcgis/core/assets/esri/themes/light/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

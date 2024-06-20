import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const LazyApp = lazy(() => import('./App'))
root.render(
  <React.StrictMode>
    <Suspense fallback={'Loading....'}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PixiRotate from './PixiRotate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PixiRotate/>
    <App/>
  </React.StrictMode>
);


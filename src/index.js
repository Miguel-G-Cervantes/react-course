import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App3';
import reportWebVitals from './reportWebVitals';
import { TaskContextPrivider } from './Context/TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskContextPrivider>
    <App />
    </TaskContextPrivider>
  </React.StrictMode>
);


reportWebVitals();

import { StrictMode } from 'react'
import React from 'react';
console.log('Version: 1.1');
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

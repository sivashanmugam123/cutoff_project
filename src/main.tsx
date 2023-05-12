import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import $ from 'jquery';  
// import Popper from 'popper.js';  
// import 'bootstrap/dist/js/bootstrap.bundle.min'; 
// import 'bootstrap/dist/css/bootstrap.min.css';  
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

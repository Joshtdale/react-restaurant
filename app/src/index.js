import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Header';
import './home.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <div className='background'>
    <Header className="headFont"/>
    <App />
  </div>
  /* </React.StrictMode> */
);
// console.log('working')

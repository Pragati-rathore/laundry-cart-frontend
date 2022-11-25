import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Signin from './components/Auth/Signin/Signin';
import Register from './components/Auth/Regsister/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Signin/> */}
     <Register/>
  </React.StrictMode>
);

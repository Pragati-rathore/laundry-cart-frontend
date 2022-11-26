import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Foter from './components/Auth/Footersend/Foter';
// import Header from './components/header';

// import App from './App';
import Signin from './components/Auth/Signin/Signin';
import Register from './components/Auth/Regsister/Register';
// import Regis from './components/Auth/Regsister/Regis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Signin/>
     <Register/>
     {/* <Regis/> */}
     {/* <Header/>
     <Footer/> */}
       {/* <Footerfst/> */}
       {/* <Foter/> */}
  </React.StrictMode>
);

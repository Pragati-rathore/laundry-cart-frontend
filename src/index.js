import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Header from './components/header';
// import Footer from "./components/footer"
// import App from './App';
import Signin from './components/Auth/Signin/Signin';
// import Register from './components/Auth/Regsister/Register';
// import Regis from './components/Auth/Regsister/Regis';
// import Footerfst from "./components/Auth/Footerfst"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Signin/>
     {/* <Register/> */}
     {/* <Regis/> */}
     {/* <Header/>
     <Footer/> */}
       {/* <Footerfst/> */}
  </React.StrictMode>
);

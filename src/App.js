import './App.css';

import Header from './components/header';
import SideBar from './components/sidebar';
import Footer from './components/footer';
import CreateOrderButton from './components/createOrderButton';
import CreateOrder from './components/createOrder/CreateOrder';


// import Home from './components/Home/home';

// import "./components/summary.css"
import PastOrder from './components/PastOrders/pastOrder';
// import PastSummary from './components/PastOrders/pastSummary';
// import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CreateOrder/>
      
      
      {/* <Header/>
      <CreateOrderButton/>
      
      <SideBar/>
      <Footer/> */}
      {/*
      
      //.....for home pg
      {/* <BrowserRouter>
       <Routes>
        <Route   path="/" element={<Home/>}/>

     </Routes>
      </BrowserRouter> */}

      
      {/*   ....for pastOrder*/}
      <PastOrder/> 

       {/* ....for pastSummarypart
      <PastSummary/> */}
      
    </div>
  );
}

export default App;
      //<Header/>
      //<CreateOrderButton/>
      //<SideBar/>
      //<Footer/>

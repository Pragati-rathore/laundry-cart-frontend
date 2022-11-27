import './App.css';

// import Home from './components/Home/home';

// import "./components/summary.css"
import PastOrder from './components/PastOrders/pastOrder';
// import PastSummary from './components/PastOrders/pastSummary';
// import {BrowserRouter,Routes,Route} from "react-router-dom";





function App() {
  return (
    <div className="App">
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

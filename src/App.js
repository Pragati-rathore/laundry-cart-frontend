import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavbarAndFooter from "./components/NavbarAndFooter";
import Signin from "./components/Auth/Signin/Signin";

//import SideBar from "./components/Home/sidebar";
//import Footer from "./components/Home/footer";
//import Register from "./components/Auth/Register/Register";
//import CreateOrderButton from "./components/createOrderButton";
import CreateOrder from "./components/createOrder/CreateOrder";

// import Home from './components/Home/home';

// import "./components/summary.css"
//import PastOrder from "./components/PastOrders/pastOrder";
// import PastSummary from './components/PastOrders/pastSummary';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarAndFooter/>}>
            <Route path="signin" element={<Signin/>}/>
            <Route path="createorder" element={<CreateOrder/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Header/>
//<CreateOrderButton/>
//<SideBar/>
//<Footer/>

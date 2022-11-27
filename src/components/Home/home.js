import React from "react";
import Footer from "./footer";
import SideBar from "./sidebar";
import Header from "./header";
import CreateOrderButton from "../createOrderButton";

function Home(){
     return(<>
     <Header/>
     <CreateOrderButton/>
     <SideBar/>
    
     <Footer/>
     
     </>)
}

export default Home;
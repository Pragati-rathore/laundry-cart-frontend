import React, { useEffect } from "react";
import SideBar from "./sidebar";
import CreateOrderButton from "../createOrderButton";
import { Outlet, useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        //check if logged in
        if (!localStorage.getItem("laundry-token")) {
            navigate("/");
        }
    });

    return (
        <div className="orders-route-container">
                <SideBar />
                <Outlet />
        </div>
    );
}

export default Home;
//<CreateOrderButton/>

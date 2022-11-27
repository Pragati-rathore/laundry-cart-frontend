import React from "react";
import { useLocation } from "react-router-dom";
import "./sidebar.css"

const SideBar =()=>{
    return(
        <>
        <div className="sidebar">
            <div className="home"><img src="/images/home.png" alt=""/></div>
            <div className="plus"><img src="/images/plus.png" alt=""/></div>
            <div id="content"><img src="/images/content.png" alt=""/></div>
        </div>
        </>
    )
}
export default SideBar;

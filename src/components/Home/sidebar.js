import React from "react";
import { useNavigate } from "react-router-dom";
import ContentIcon from "../../images/content.png";
import PlusIcon from "../../images/plus.png";
import HomeIcon from "../../images/home.png";
import "./sidebar.css";

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="sidebar">
                <div className="home" onClick={(e) => navigate("/")}>
                    <img src={HomeIcon} alt="" />
                </div>
                <div className="plus" onClick={(e) => navigate("/orders/new")}>
                    <img src={PlusIcon} alt="" />
                </div>
                <div id="content" onClick={(e) => navigate("/orders")}>
                    <img src={ContentIcon} alt="" />
                </div>
            </div>
        </>
    );
};
export default SideBar;

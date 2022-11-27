import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <header id="header">
                <div className="heading">
                    <h2 onClick={(e) => navigate("/")}>LAUNDRY</h2>
                </div>

                <div id="rigth-head">
                    <div className="list1">
                        <p className="pricing">Pricing</p>
                    </div>

                    <div className="list2">
                        <p className="career">Career</p>
                    </div>
                    {location.pathname !== "/" &&
                        location.pathname !== "/register" && (
                            <div
                                className="list2 logout"
                                onClick={(e) => {
                                    localStorage.removeItem("laundry-token");
                                    navigate("/");
                                }}
                            >
                                <p className="carrer">Logout</p>
                            </div>
                        )}
                </div>
            </header>
        </>
    );
};
export default Header;

import React from "react";

import "./Header.css"
const Header = () => {

    return (
        <>
            <header id="header">
                <div className="heading"><h2>LAUNDRY</h2></div>

                <div id="rigth-head">
                    <div className="list1">
                        <p className="pricing">Pricing</p>
                    </div>

                    <div className="list2">
                        <p className="career">Career</p>
                    </div>
                </div>

            </header>
        </>
    )
}
export default Header;

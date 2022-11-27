import React from "react";
import "./pastSummary.css"
import {useState} from "react";


function PastSummary(){

    const [location, setLocation] = useState("store location");
    return(
        <>

<div className="summary__conatiner1">
          <div className="summary__leftdiv">
            <header className="summary__header">
              <div className="summary__header__innnerdiv">
                <h1>Summary</h1>
                
              </div>
            </header>

            <nav className="summary__storeselector">
              <div className="summary_StoreSelector__leftdiv">
              <form>
              <select
                className="summary__storeselector__form"
                required="true"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="store location">Store Location</option>
                <option value="Nagarxyz">Nagarxyz</option>
                <option value="abc">abc</option>
                <option value="hgf">hgf</option>
              </select>
            </form>

              </div>
              <div>
                <h4>Store Address</h4>
                <p>local</p>
              </div>
              <div className="summary_StoreSelector__rightdiv">
                <h4>phone No:</h4>
                <p>+91-9999999999</p>
              </div>
            </nav>

            <div className="multi_stepper">
              <div className="multi-stepper-tags"></div>
              <span className="track-span">pickedup</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">washed</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">ironed</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">delivered</span>
            </div>

            <div className="summary__orderdetails__container1">
              <div className="summary__heading">
                <h2>Order details</h2>
              </div>
              {/* {Object.keys(customerorder).map((item) => {
                if (customerorder[item].quantity > 0) {
                  return ( */}
                    <div className="summary__orderdetails">
                      {/* <h1>{customerorder[item].name}</h1>
                      <p>{customerorder[item].washtype}</p> */}

                      <div className="summary__pricediv">
                        <h3 className="summary__priceparticulars">
                          {/* {customerorder[item].quantity} x{" "}
                          {customerorder[item].totalPrice} ={" "} */}
                        </h3>
                        <h3 className="summary__mainPrice">
                          {/* {customerorder[item].totalPrice *
                            customerorder[item].quantity} */}
                        </h3>
                      </div>
                    </div>
                  {/* );
                }
              })} */}
              <div className="summary__subtotal">
                <div className="summary__pricediv">
                  <p className="summary__priceparticulars">Subtotal:</p>
                  <h3 className="summary__mainPrice">
                    {/* {" "}
                    {customerorder.totalPrice}{" "} */}
                  </h3>
                </div>
              </div>
              <div className="summary__pickupcharges">
                <div className="summary__pricediv">
                  <p className="summary__priceparticulars">pickup charges:</p>
                  <h3 className="summary__mainPrice"> 90 </h3>
                </div>
              </div>
              <div className="summary__totalprice">
                <div className="summary__pricediv">
                  <h2 className="summary__priceparticulars__mainprice">
                    Total:
                  </h2>
                  <h2 className="summary__mainPrice__mainprice">
                    {/* Rs: {customerorder.totalPrice + 90}{" "} */}
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="summary__address__container">
              <h4>Address</h4>
              <div
                // onClick={selectAddress}
                className="summary__address summary__address--active"
              >
                <img alt="" src="images/tick.svg"></img>
                {/* <p>{customerorder.Address}</p> */}
              </div>
            </div>

            <footer className="summary__footer1">
              {/* <button onClick={alert_popup} className="cancel"> */}
              <button className="cancel">
                Cancel Order
              </button>
            </footer>

            
        </div>
        </div>
      </>
    
    )
}
export default PastSummary;
import React, {useState} from "react";
import "./pastOrder.css";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

function PastOrder() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
    
  useEffect(()=> {
    fetch("https://laundry-server.onrender.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("laundry-token")}`
      }
    }).then(res=> res.json()).then(data=> {
      if (data.status==="failed") {
        navigate("/");
      }
      if (data.status==="success") {
        setOrders(data.orders);
      }
    }).catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="pastOrder">
        <div className="table-order-main-header">
          <div className="table-main-header-data">
            <h4 style={{ fontSize: "18px" }}>Orders |</h4>
          </div>
          <div className="table-create-search">
            <div>
              <button className="create-button">Create</button>
            </div>
            <div className="search-bar">
              <i
                style={{ color: "#a0a0a0" }}
                class="fa-solid fa-magnifying-glass"
              ></i>
              <input type="text" />{" "}
            </div>
          </div>
        </div>

        <div className="tablePast">
          <div className="orders-table-header">
            <div className="column">
              <h6>Order id</h6>
            </div>
            <div className="column">
              <h6>Order date</h6>
            </div>
            <div className="column">
              <h6>Store Location</h6>
            </div>
            <div className="column">
              <h6>City</h6>
            </div>
            <div className="column">
              <h6>Store Phone</h6>
            </div>
            <div className="column">
              <h6>Total items</h6>
            </div>
            <div className="column">
              <h6>Price</h6>
            </div>
            <div className="column">
              <h6>Status</h6>
            </div>
            <div className="column">
              <h6>View</h6>
            </div>
          </div>
        </div>

        <div className="details-container1">
          <div className="column">
            <p>OROOO</p>
          </div>
          <div className="column">
            <p>29 NOV 2022</p>
          </div>
          <div className="column">
            <p>local</p>
          </div>
          <div className="column">
            <p>hgag</p>
          </div>
          <div className="column">
            <p>+919988667755</p>
          </div>
          <div className="column">
            <p>12</p>
          </div>
          <div className="column">
            <p>450</p>
          </div>
          <div className="column">
            <p>ready to pickup</p>
          </div>
          <div className="column">
            <p>
              eye
              {/* <i
                            // onClick={() => changeHandler(ele._id)}
                            class="fa-solid fa-eye"
                            style={{ cursor: "pointer" }}
                          ></i> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastOrder;

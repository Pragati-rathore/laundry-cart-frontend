import React, { useState } from "react";
import "./pastOrder.css";
import eyeIcon from "../../images/eye.png";
import CreateOrderButton from "../createOrderButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PastOrder() {
  const [orders, setOrders] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  //const [isCancel, setIsCancel] = useState(false);
  //const [isSummary, setIsSummary] = useState(false);
  //const [selectedOrderId, setSelectedOrderId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://laundry-server.onrender.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("laundry-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "failed") {
          navigate("/");
        }
        if (data.status === "success") {
          setOrders(data.orders);
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
    <>
      {orders.length > 0 && <div className="pastOrder">
        <div className="table-order-main-header">
          <div className="table-main-header-data">
            <h4 style={{ fontSize: "18px" }}>Orders |</h4>
          </div>
          <div className="table-create-search">
            <div>
              <button className="create-button" onClick={_e => navigate("/orders/new")}>Create</button>
            </div>
            <div className="search-bar">
              <i
                style={{ color: "#a0a0a0" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
              <input type="text" onChange={e => setSearchStr(e.target.value)} placeholder="Search orders"/>
            </div>
          </div>
        </div>

        <div className="past-order-table-wrapper">
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
            </div>
            <div className="column">
              <h6>View</h6>
            </div>
          </div>
        </div>

          <div id="past-order-rows-wrapper">
        {orders.length > 0 &&
            orders.filter(order => {
              if (searchStr==="") return true;
              else {
                return new RegExp(searchStr, "igm").test(order.storeId.stName);
              }
            }).map((order) => {
            let date = new Date(order.createdAt);
            let dateStr = `${date
              .toTimeString()
              .split(" ")[0]
              .substring(0, 5)}\n${date.toDateString().substring(4)}`;
            let addArr = order.storeId.stAdd.split(",");
            let district = addArr[addArr.length - 1];

            return (
              <div className="details-container1" key={order._id}>
                <div className="column">
                  <p>
                    {order._id.substring(
                      order._id.length - 4,
                      order._id.length
                    )}
                  </p>
                </div>
                <div className="column">
                  <p>{dateStr}</p>
                </div>
                <div className="column">
                  <p>{order.storeId.stName}</p>
                </div>
                <div className="column">
                  <p>{district}</p>
                </div>
                <div className="column">
                  <p>{`+91${order.storeId.phone}`}</p>
                </div>
                <div className="column">
                  <p>{order.quantity}</p>
                </div>
                <div className="column">
                  <p>{order.total}</p>
                </div>
                <div className="column">
                  <p>{order.status}</p>
                </div>
                <div className="column">
                  {order.status === "Ready to pickup" ? (
                    <p
                      id="cancel-text-cell"
                      onClick={(e) => {
                        //setIsCancel(true);
                        //setSelectedOrderId(order._id);
                      }}
                    >
                      Cancel Order
                    </p>
                  ) : null}
                </div>
                <div className="column">
                  <p><img src={eyeIcon} alt="view"/></p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>}
      {orders.length === 0 && <CreateOrderButton/>}
    </>
  );
}

export default PastOrder;

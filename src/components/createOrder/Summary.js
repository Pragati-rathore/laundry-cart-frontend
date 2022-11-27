import { useState, useEffect } from "react";
import "./Summary.css";

export default function Summary(props) {
  const { order, cancelHandler } = props;
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState({
    _id: "",
    stName: "",
    stAdd: "",
    phone: null,
  });

  useEffect(() => {
    fetch("https://laundry-server.onrender.com/stores")
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "failed") {
          setStores(data.stores);
        } else {
          throw new Error("Fetching available stores failed");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(selectedStore);
  }, [selectedStore]);

  return (
    <>
      <div
        className="summary-create-order"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "29%",
          backgroundColor: "black",
          zIndex: 500,
        }}
      ></div>
      <div
        className="summary-createOrder"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          backgroundColor: "white",
          width: "800px",
          height: "100vh",
          maxWidth: "100vw",
          zIndex: 1000,
        }}
      >
        <div className="header">
          <span>Summary</span>
          <span className="cancel" onClick={cancelHandler}>
            X
          </span>
        </div>
        <div className="select-store-container">
          <div id="select-store">
            <select
              value={selectedStore._id}
              placeholder="Select Store"
              onChange={(e) => {
                if (e.target.value !== "") {
                  setSelectedStore(
                    stores.find((store) => store._id === e.target.value)
                  );
                }
              }}
            >
              <option value="">--Select a Store--</option>
              {stores.map((store) => {
                return (
                  <option key={store._id} value={store._id}>
                    {store.stName}
                  </option>
                );
              })}
            </select>
          </div>
          <div id="store-address">
            <div>Store Address:</div>
            <div>
              {selectedStore.stAdd !== "" ? selectedStore.stAdd : "___"}
            </div>
          </div>
          <div id="store-phone">
            <div>Phone:</div>
            <div>
              {selectedStore.phone !== null ? selectedStore.phone : "___"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

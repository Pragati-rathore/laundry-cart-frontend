import { useState } from "react";
import "./Summary.css";

export default function Summary(props) {
  const { order, cancelHandler } = props;
  const {store, setStore} = useState([]);

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
        <div className="header"><span>Summary</span><span className="cancel" onClick={cancelHandler}>X</span></div>
      </div>
    </>
  );
}

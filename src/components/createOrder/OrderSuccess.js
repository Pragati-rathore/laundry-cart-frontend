import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess(props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="order-confirm-wrapper"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1001,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="order-success">
          <div className="check-icon">&#10003;</div>
          <div>Your Order is successfully placed.</div>
          <div>You can track the delivery in the "Orders" section.</div>
          <button type="button" onClick={(_e) => navigate("/orders")}>
            Go to orders
          </button>
        </div>
      </div>
    </>
  );
}

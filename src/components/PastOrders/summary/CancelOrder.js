import { useNavigate } from "react-router-dom";
import "./CancelOrder.css";

export default function CancelOrder(props) {
  const { cancelPopupHandler } = props;
  const orderId = props.orderId;
  const navigate = useNavigate();

  const handleDelete = (_e) => {
    fetch("https://laundry-server.onrender.com/orders", {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("laundry-token")}`,
      },
      body: JSON.stringify({orderId})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className="order-confirm-wrapper2"
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
        <div className="order-success2">
          <div className="cancel-header2">
            <div>Alert</div>
            <div onClick={(e) => cancelPopupHandler()} id="close-cancel-popup2">
              X
            </div>
          </div>
          <div id="cancel-popup-text2">
            Are you sure want to cancel the order No.{" "}
            {orderId.substring(orderId.length - 4)}
          </div>
          <button
            type="button"
            onClick={(e) => {
              handleDelete(e);
              navigate("/orders");
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}

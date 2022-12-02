import { useNavigate } from "react-router-dom";
import "./CancelOrder.css";
import BACKEND_URL from "../../../exports";

export default function CancelOrder(props) {
  const { cancelPopupHandler } = props;
  const orderId = props.orderId;
  const navigate = useNavigate();

  const handleDelete = (_e) => {
    fetch(`${BACKEND_URL}/orders`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("laundry-token")}`,
      },
      body: JSON.stringify({ orderId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") navigate(0);
        else window.alert(data.message);
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

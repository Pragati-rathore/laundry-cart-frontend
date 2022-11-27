import "./CancelOrder.css";

export default function CancelOrder(props) {
  const { cancelPopupHandler } = props;
  const orderId = props.orderId;
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
          <div className="cancel-header">
            <div>Alert</div>
            <div onClick={(e) => cancelPopupHandler()} id="close-cancel-popup">X</div>
          </div>
          <div id="cancel-popup-text">
            Are you sure want to cancel the order No.{" "}
            {orderId.substring(orderId.length - 4)}
          </div>
          <button type="button" onClick={(_e) => {}}>
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}

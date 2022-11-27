import { useState} from "react";
//import OrderSuccess from "./OrderSuccess";
import "./Summary.css";

export default function Summary(props) {
  const { orders, orderId, productTypes, cancelHandler, cancelPopup } = props;

  const order = orders.find((orderObj) => {
    if (orderObj._id === orderId) return true;
    else return false;
  });

  console.log(order, "dskagjfghjgsajfgjhsagfhgfsafaghjgfajgsj")
  const store = order.storeId;

  const [chargeObj, subTotal, quantityTotal] = calculateSubTotal(
    order.order,
    productTypes
  );

  //const [isOrderSuccess, setIsOrderSuccess] = useState(false); //cancel success
  const [isCancel, setIsCancel] = useState(cancelPopup); //cancel success

  //const [user, setUser] = useState({ _id: "", address: [] });

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
      {!isCancel && (
        <>
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
              <span className="close-order-summary" onClick={cancelHandler}>
                X
              </span>
            </div>

            <div className="select-store-container">
              <div id="select-store">{store.stName}</div>
              <div id="store-address">
                <div>Store Address:</div>
                <div>
                  {store.stAdd}
                </div>
              </div>
              <div id="store-phone">
                <div>Phone:</div>
                <div>
                  {store.phone}
                </div>
              </div>
            </div>

            <div className="price-table-container">
              <div>Order details</div>
              <table>
                <tbody>
                  {order.order.map((orderChoice) => {
                    return (
                      <PriceRow
                        key={orderChoice.prodName}
                        orderChoice={orderChoice}
                        chargeObj={chargeObj}
                      />
                    );
                  })}
                  <tr id="sub-total">
                    <td colSpan={3}>SubTotal: </td>
                    <td>{subTotal}</td>
                  </tr>
                  <tr id="pickup-charge">
                    <td colSpan={3}>Pickup Charge: </td>
                    <td>{subTotal > 0 ? "90" : "0"}</td>
                  </tr>
                  <tr id="total-price">
                    <td colSpan={3}>Total: </td>
                    <td>{subTotal > 0 ? `Rs ${subTotal + 90}` : "Rs 0"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="address-wrapper">
              <div>Address</div>
              <div className="address-card-container">
                      <div className="address-card">
                        <p>{order.add.addName}</p>
                        <div>{`${order.add.address}, ${order.add.district}, ${order.add.state}, ${order.add.pincode}`}</div>
                      </div>
              </div>
            </div>

            <div className="submit-order">
              <button
                type="button"
                disabled={order.status ==="Ready to pickup" ? false : true}
                onClick={(e) => {setIsCancel(true)}}
              >
                Cancel Order
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

      //{isCancel && <OrderSuccess />}
function PriceRow(props) {
  const { prodType, quantity } = props.orderChoice;
  const { chargeObj } = props;
  const serviceString = chargeObj[prodType][1];
  const chargePerProd = chargeObj[prodType][0];

  return (
    <tr style={{ borderBottom: "1px solid #00000029" }}>
      <td>{prodType}</td>
      <td>{serviceString}</td>
      <td>{`${quantity} X ${chargePerProd} =`}</td>
      <td>{`${quantity * chargePerProd}`}</td>
    </tr>
  );
}

function calculateSubTotal(order, productTypes) {
  let subTotal = 0;
  let chargeObj = {};
  let quantityTotal = 0;
  order.forEach((orderChoice) => {
    const { prodType, quantity, washType } = orderChoice;
    const product = productTypes.find(
      (product) => product.prodName === prodType
    );

    const chargePerProd = (product) => {
      let charge = 0;
      let serviceString = "";
      for (let key in washType) {
        if (washType[key]) {
          switch (key) {
            case "wash":
              charge += product.prodCharges[0];
              serviceString += " Washing,";
              break;
            case "iron":
              charge += product.prodCharges[1];
              serviceString += " Ironing,";
              break;
            case "dryClean":
              charge += product.prodCharges[2];
              serviceString += " Dry cleaning,";
              break;
            case "bleaching":
              charge += product.prodCharges[3];
              serviceString += " Chemical wash,";
              break;
            default:
              charge += 0;
          }
        }
      }
      return [
        charge,
        serviceString.substring(0, serviceString.length - 1).trim(),
      ];
    };
    let [c, serviceString] = chargePerProd(product);
    chargeObj[prodType] = [c, serviceString];
    quantityTotal += quantity;
    subTotal += c * quantity;
  });
  return [chargeObj, subTotal, quantityTotal];
}

import { useState, useEffect } from "react";
import OrderSuccess from "./OrderSuccess";
import "./Summary.css";

export default function Summary(props) {
  const { order, cancelHandler, productTypes } = props;
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState({
    _id: "",
    stName: "",
    stAdd: "",
    phone: null,
  });
  const [chargeObj, subTotal, quantityTotal] = calculateSubTotal(order, productTypes);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  const [user, setUser] = useState({ _id: "", address: [] });

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
    fetch("https://laundry-server.onrender.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("laundry-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "failed") {
          setUser(data.user);
        } else {
          throw new Error("Fetching user detail failed");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //useEffect(() => {
  //console.log(user);
  //}, [user]);

  const handleOrder = (e) => {
    e.preventDefault();
    if (subTotal <= 0) {
      window.alert("Choose some sevices first");
      return;
    }
    if (selectedStore._id === "") {
      window.alert("Select a store");
    }
    if (subTotal > 0 && selectedStore._id !== "") {
      fetch("https://laundry-server.onrender.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("laundry-token")}`,
        },
        body: JSON.stringify({
          storeId: selectedStore._id,
          order,
          quantity: quantityTotal,
          total: subTotal + 90,
          add: user.address[0],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === "success") {
            setIsOrderSuccess(true);
          }
          if (data.status === "failed") {
            window.alert(data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };

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
      {!isOrderSuccess && (
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

            <div className="price-table-container">
              <div>Order details</div>
              <table>
                <tbody>
                  {order.map((orderChoice) => {
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
                {user.address.length > 0 &&
                  user.address.map((address) => {
                    return (
                      <div key={address._id} className="address-card">
                        <p>{address.addName}</p>
                        <div>{`${address.address}, ${address.district}, ${address.state}, ${address.pincode}`}</div>
                      </div>
                    );
                  })}
                <div id="add-new-address-btn">ADD NEW</div>
              </div>
            </div>

            <div className="submit-order">
              <button
                type="button"
                disabled={subTotal > 0 ? false : true}
                onClick={(e) => handleOrder(e)}
              >
                Confirm
              </button>
            </div>
          </div>
        </>
      )}
      {isOrderSuccess && <OrderSuccess />}
    </>
  );
}

function PriceRow(props) {
  const { prodType, quantity } = props.orderChoice;
  const { chargeObj } = props;
  const serviceString = chargeObj[prodType][1];
  const chargePerProd = chargeObj[prodType][0];

  return (
    <tr style={{borderBottom: "1px solid #00000029"}}>
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
  let quantityTotal =0;
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

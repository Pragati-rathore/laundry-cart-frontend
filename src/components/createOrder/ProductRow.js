import React from "react";
//import './ProductRow.css';

export default function ProductRow(props) {
  //TODO recieve the handler for quantity object and qunatity for value
  const { product, order, onChangeOrderHandler } = props;

  const prodOrder =
    order.length > 0
      ? order.find((order) => order.prodType === product.prodName)
      : {
          prodName: "Unknown",
          qunatity: 0,
          washType: {
            wash: false,
            iron: false,
            dryClean: false,
            bleaching: false,
          },
        };

  const chargePerProd = () => {
    let charge = 0;
    for (let key in prodOrder.washType) {
      if (prodOrder.washType[key]) {
        switch (key) {
          case "wash":
            charge += product.prodCharges[0];
            break;
          case "iron":
            charge += product.prodCharges[1];
            break;
          case "dryClean":
            charge += product.prodCharges[2];
            break;
          case "bleaching":
            charge += product.prodCharges[3];
            break;
          default:
            charge += 0;
        }
      }
    }
    return charge;
  };

  return (
    <tr className="product-row">
      <td>{product.prodName.toUpperCase()}</td>
      <td>
        <input
          type="number"
          placeholder="0"
          name={product.prodName}
          min="0"
          value={prodOrder.quantity}
          onChange={(e) => onChangeOrderHandler(e, "quantity")}
        />
      </td>
      <td className="washtype">
        <div className="washtype-icon-container washtype-icon1">
          <img className="washtype-icon" src="#" alt="" />
          <input
            type="checkbox"
            name="wash"
            checked={prodOrder.washType.wash}
            onChange={(e) => {
              onChangeOrderHandler(e, "washType", product.prodName);
            }}
          />
        </div>
        <div className="washtype-icon-container washtype-icon2">
          <img className="washtype-icon" src="#" alt="" />
          <input
            type="checkbox"
            name="iron"
            checked={prodOrder.washType.iron}
            onChange={(e) => {
              onChangeOrderHandler(e, "washType", product.prodName);
            }}
          />
        </div>
        <div className="washtype-icon-container washtype-icon3">
          <img className="washtype-icon" src="#" alt="" />
          <input
            type="checkbox"
            name="dryClean"
            checked={prodOrder.washType.dryClean}
            onChange={(e) => {
              onChangeOrderHandler(e, "washType", product.prodName);
            }}
          />
        </div>
        <div className="washtype-icon-container washtype-icon4">
          <img className="washtype-icon" src="#" alt="" />
          <input
            type="checkbox"
            name="bleaching"
            checked={prodOrder.washType.bleaching}
            onChange={(e) => {
              onChangeOrderHandler(e, "washType", product.prodName);
            }}
          />
        </div>
      </td>
      <td>
        {prodOrder.quantity !== 0 && (
          <>
            <span>{`${prodOrder.quantity} x ${chargePerProd()} = `}</span>
            <span>{`${prodOrder.quantity * chargePerProd()}`}</span>
          </>
        )}
      </td>
    </tr>
  );
}

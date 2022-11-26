import React from "react";
import "./ProductRow.css";

import washIcon from "../../images/wash.svg";
import ironingIcon from "../../images/iron.svg";
import dryCleanIcon from "../../images/dryClean.svg";
import bleachingIcon from "../../images/bleaching.svg";
import washIconAlt from "../../images/washAlt.svg";
import ironingIconAlt from "../../images/ironAlt.svg";
import dryCleanIconAlt from "../../images/dryCleanAlt.svg";
import bleachingIconAlt from "../../images/bleachingAlt.svg";

export default function ProductRow(props) {
  const { product, order, onChangeOrderHandler } = props;

  const prodOrder =
    order.length > 0
      ? order.find((order) => order.prodType === product.prodName)
      : {
          prodName: "Unknown",
          quantity: 0,
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
      <td>{product.prodName}</td>
      <td className="product-quantity">
        <input
          type="number"
          placeholder="0"
          name={product.prodName}
          min="0"
          value={prodOrder.quantity}
          style={prodOrder.quantity !== 0 ? {border: "1px solid #5861AE"} : {border: "1px solid #BABABA"}}
          onChange={(e) => onChangeOrderHandler(e, "quantity")}
        />
      </td>
      <td className="washtype">
        <div className="washtype-icon-container">
        <div className="washtype-icon1">
          <label>
            <img
              className="washtype-icon"
              src={prodOrder.washType.wash ? washIconAlt : washIcon}
              alt="wash"
            />
            <input
              type="checkbox"
              name="wash"
              checked={prodOrder.washType.wash}
              onChange={(e) => {
                onChangeOrderHandler(e, "washType", product.prodName);
              }}
            />
          </label>
        </div>
        <div className="washtype-icon2">
          <label>
            <img
              className="washtype-icon"
              src={prodOrder.washType.iron ? ironingIconAlt : ironingIcon}
              alt="ironing"
            />
            <input
              id="iron-check"
              type="checkbox"
              name="iron"
              checked={prodOrder.washType.iron}
              onChange={(e) => {
                onChangeOrderHandler(e, "washType", product.prodName);
              }}
            />
          </label>
        </div>
        <div className="washtype-icon3">
          <label>
            <img
              className="washtype-icon"
              src={prodOrder.washType.dryClean ? dryCleanIconAlt : dryCleanIcon}
              alt="dryClean"
            />
            <input
              id="dryClean-check"
              type="checkbox"
              name="dryClean"
              checked={prodOrder.washType.dryClean}
              onChange={(e) => {
                onChangeOrderHandler(e, "washType", product.prodName);
              }}
            />
          </label>
        </div>
        <div className="washtype-icon4">
          <label>
            <img
              className="washtype-icon"
              src={
                prodOrder.washType.bleaching ? bleachingIconAlt : bleachingIcon
              }
              alt="bleach"
            />
            <input
              id="bleaching-check"
              type="checkbox"
              name="bleaching"
              checked={prodOrder.washType.bleaching}
              onChange={(e) => {
                onChangeOrderHandler(e, "washType", product.prodName);
              }}
            />
          </label>
        </div>
        </div>
      </td>
      <td>
        {prodOrder.quantity !== 0 ? (
          <>
            <span>{`${prodOrder.quantity} x ${chargePerProd()} = `}</span>
            <span id="span-total-row">{`${prodOrder.quantity * chargePerProd()}`}</span>
          </> 
        ) : <span id="dashes">---</span>}
      </td>
      <td>
        {prodOrder.quantity > 0 && <button
          id="reset-productRow"
          type="button"
          onClick={(e) => onChangeOrderHandler(e, "reset", product.prodName)}
        >
          Reset
        </button>}
      </td>
    </tr>
  );
}

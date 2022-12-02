import { useState, useEffect } from "react";
import ProductRow from "./ProductRow";
import Summary from "./Summary";
import "./CreateOrder.css";
import { useNavigate } from "react-router-dom";

//images
import searchIcon from "../../images/search.svg";
import BACKEND_URL from "../../exports";

export default function CreateOrder(props) {
  const [productTypes, setProductTypes] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [order, setOrder] = useState([]); //[{productSchema}] {prodType:"prodName", quantity, washType:{wash, iron, dryClean}}
  //summary related
  const [showSummary, setShowSummary] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProductTypes(data.products))
      .catch((err) => console.log(err))
      .catch((err) => console.log("Error while fetching productTypes", err));
  }, []);

  useEffect(() => {
    const orderArr = [];
    productTypes.forEach((product) => {
      orderArr.push({
        prodType: product.prodName,
        quantity: 0,
        washType: {
          wash: false,
          iron: false,
          dryClean: false,
          bleaching: false,
        },
      });
    });
    setOrder(orderArr);
  }, [productTypes]);

  const onChangeOrderHandler = (e, logic, prodName) => {
    if (logic === "washType") {
      setOrder((oldOrder) => {
        return oldOrder.map((order) => {
          if (order.prodType === prodName) {
            //console.log("sds",order.washType[e.target.name], !order.washType[e.target.name])
            order.washType[e.target.name] = e.target.checked;
            return order;
          }
          return order;
        });
      });
    }

    if (logic === "quantity") {
      setOrder((oldOrder) => {
        return oldOrder.map((order) => {
          if (order.prodType === e.target.name) {
            order.quantity = parseInt(e.target.value);
            return order;
          }
          return order;
        });
      });
    }

    if (logic === "reset") {
      setOrder((oldOrder) => {
        return oldOrder.map((order) => {
          if (order.prodType === prodName) {
            order.quantity = 0;
            order.washType = {
              wash: false,
              iron: false,
              dryClean: false,
              bleaching: false,
            };
            return order;
          }
          return order;
        });
      });
    }
  };

  //useEffect(() => {console.log(order)}, [order]);

  return (
    <div className="create-order-container">
      <div className="create-order-header">
        <h2>Create Order</h2>
        <div className="search-box">
          <div className="search-icon-container">
            <img src={searchIcon} alt="" />
          </div>
          <input
            type="text"
            name="searchproduct"
            placeholder="Search Product"
            onChange={(e) => {
              setSearchProduct(e.target.value);
            }}
            value={searchProduct}
          />
        </div>
      </div>
      <table className="create-order">
        <thead>
          <tr>
            <th>Product Types</th>
            <th>Quantity</th>
            <th>Wash Types</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productTypes
            .filter((product) =>
              new RegExp(searchProduct).test(product.prodName)
            )
            .map((product) => (
              <ProductRow
                key={product._id}
                product={product}
                order={order}
                onChangeOrderHandler={onChangeOrderHandler}
              />
            ))}
        </tbody>
      </table>
      <div className="proceed-btns-container">
        <button
          id="btn-cancel"
          type="button"
          onClick={(_e) => navigate("/orders")}
        >
          Cancel
        </button>
        <button
          id="btn-proceed"
          type="button"
          onClick={(_e) => setShowSummary(true)}
        >
          Proceed
        </button>
      </div>

      {showSummary && (
        <Summary
          order={order.filter((productObj) => {
            //filters empty product orders
            return (
              productObj.quantity > 0 &&
              Object.entries(productObj.washType).some((arr) => arr[1])
            );
          })}
          cancelHandler={() => setShowSummary(false)}
          productTypes={productTypes}
        />
      )}
    </div>
  );
}

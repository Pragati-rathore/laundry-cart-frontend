import { useState, useEffect } from "react";
import ProductRow from "./ProductRow";

export default function CreateOrder(props) {
  const [productTypes, setProductTypes] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [order, setOrder] = useState([]); //[{productSchema}] {prodType:"prodName", quantity, washType:{wash, iron, dryClean}}
  /*productTypes
   * {
    _id: ObjectId("637e1d8608045c36435dfe8d"),
    prodName: 'shirts',
    prodCharges: [ 20, 10, 15, 30 ]
  }*/

  useEffect(() => {
    fetch("https://laundry-server.onrender.com/products")
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
  };

  useEffect(() => {console.log(order)}, [order]);

  return (
    <div className="create-order-container">
      <div className="create-order-header">
        <h2>Create Order</h2>
        {/*SEARCH COMPONENT seperate this TODO*/}
        <input
          type="text"
          name="searchproduct"
          placeholder="Search Product"
          onChange={(e) => {
            setSearchProduct(e.target.value);
          }}
          value={searchProduct}
        />
        <table className="create-order">
          <thead>
            <tr>
              <th>Product Types</th>
              <th>Quantity</th>
              <th>Wash Types</th>
              <th>Price</th>
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
      </div>
    </div>
  );
}

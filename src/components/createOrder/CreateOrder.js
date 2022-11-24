import { useState } from "react";
import ProductRow from "./ProductRow";

export default function CreateOrder(props) {
  const [productTypes, setProductTypes] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  /*productTypes
   * {
    _id: ObjectId("637e1d8608045c36435dfe8d"),
    prodName: 'shirts',
    prodCharges: [ 20, 10, 15, 30 ]
  }*/

  return (
    <div class="create-order-container">
      <div class="create-order-header">
        <h2>Create Order</h2>
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
      <div className="product-table-container">
        <div className="product-table-nav">
          <p>Product Types</p>
          <p>Quantity</p>
          <p>Wash Types</p>
          <p>Price</p>
        </div>
        {productTypes.length > 1 &&
          productTypes
            .filter((productObj) =>
              new RegExp(searchProduct, "gim").test(productObj.prodName)
            )
            .map((productObj) => {
              return <ProductRow product={productObj} />;
            })}
      </div>
    </div>
  );
}

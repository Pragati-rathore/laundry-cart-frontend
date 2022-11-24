import { useState } from "react";

export default function ProductRow(props) {
  //TODO recieve the handler for quantity object and qunatity for value
  const { product } = props;

  return (
    <div class="product-row">
      <div class="product-col1">product.prodName</div>
      <div class="product-col2">
        <input type="number" name={product.prodName} value="#" />
      </div>
      <div class="product-col3">
        <div className="washType-icons-container">
          <div className="washType-icon"></div>
          <div className="washType-icon"></div>
          <div className="washType-icon"></div>
          <div className="washType-icon"></div>
        </div>
      </div>
      <div class="product-col4"></div>
    </div>
  );
}

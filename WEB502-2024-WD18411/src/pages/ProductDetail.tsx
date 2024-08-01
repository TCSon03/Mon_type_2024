import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useContext(ProductContext);

  return (
    <div>
      <h1>chi tiet san pham</h1>

      {state.products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <p>
            <img src={item.thumbnail} alt="" />
          </p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;

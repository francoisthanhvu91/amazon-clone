import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.name}</p>
        <p>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
      </div>

      <div className="product__image">
        <img alt="" src={props.imageURL} />
      </div>

      <button>Add to Cart</button>
    </div>
  );
};

export default Products;

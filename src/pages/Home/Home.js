import React from "react";
import Products from "../../components/Products/Products";
import "./Home.css";
import data from "../../Data";

function createCard(data) {
  return (
    <Products
      name={
        data.name.length > 100
          ? data.name.substring(0, 100) + " ..."
          : data.name
      }
      imageURL={data.imageURL}
      price={data.price}
    />
  );
}

const Home = () => {
  return (
    <div className="container">
      <div className="card">{data.map(createCard)}</div>
    </div>
  );
};

export default Home;

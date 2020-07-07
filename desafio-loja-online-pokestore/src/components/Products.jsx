import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = ({ data, onClick }) => {
  return (
    <section className="products">
      {data.map((currentData) => (
        <Product key={currentData.id} data={currentData} onClick={onClick} />
      ))}
    </section>
  );
};

export default Products;

import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = ({ data }) => {
  return (
    <section className="products">
      {data.map((currentData) => (
        <Product key={currentData.id} data={currentData} />
      ))}
    </section>
  );
};

export default Products;

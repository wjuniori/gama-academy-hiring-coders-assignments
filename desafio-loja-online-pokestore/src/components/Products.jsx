import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const pokemonData = {
    id: 1,
    name: "bulbasaur",
    price: 30.0,
  };

  return (
    <section className="products">
      <Product data={pokemonData} />
    </section>
  );
};

export default Products;

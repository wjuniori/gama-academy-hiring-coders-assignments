import React from "react";
import Cart from "./Cart";
import "./Shopping.css";

const Shopping = ({ data }) => {
  return (
    <section className="shopping">
      <Cart data={data} />
    </section>
  );
};

export default Shopping;

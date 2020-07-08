import React from "react";
import Cart from "./Cart";
import "./Shopping.css";

const Shopping = ({ data, onClick }) => {
  return (
    <section className="shopping">
      <Cart data={data} onClick={onClick} />
    </section>
  );
};

export default Shopping;

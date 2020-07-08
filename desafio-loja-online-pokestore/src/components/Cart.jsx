import React from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";

const Cart = ({ data, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick(data.length);
  };

  return (
    <article className="cart">
      <div className="cart__header">
        <h2>Carrinho</h2>
      </div>
      <div className="cart__body">
        {data.map((currentData, index) => (
          <CartProduct key={index} data={currentData} />
        ))}
      </div>
      <div className="cart__footer">
        <div className="cart__sum">
          <span>TOTAL</span>
          <span>{`$${data.reduce((sum, currentData) => {
            return sum + currentData.price;
          }, 0)}`}</span>
        </div>
        <button
          className={`cart__button ${!data.length && "cart__button--disabled"}`}
          disabled={!data.length}
          onClick={handleClick}
        >
          FINALIZAR
        </button>
      </div>
    </article>
  );
};

export default Cart;

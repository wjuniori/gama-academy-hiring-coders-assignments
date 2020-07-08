import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";

const Cart = ({ data, onClick }) => {
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    setDisabledButton(!data.length);
  }, [data]);

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
          className={`cart__button ${
            disabledButton ? "cart__button--disabled" : "cart__button--enabled"
          }`}
          disabled={disabledButton}
          onClick={handleClick}
        >
          FINALIZAR
        </button>
      </div>
    </article>
  );
};

export default Cart;

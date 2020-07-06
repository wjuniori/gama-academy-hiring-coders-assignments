import React from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";

const Cart = () => {
  const pokemonData = {
    id: 1,
    name: "bulbasaur",
    price: 30.0,
  };

  return (
    <article className="cart">
      <div className="cart__header">
        <h2>Carrinho</h2>
      </div>
      <div className="cart__body">
        <CartProduct data={pokemonData} />
      </div>
      <div className="cart__footer">
        <div className="cart__sum">
          <span>TOTAL</span>
          <span>{`$${pokemonData.price}`}</span>
        </div>
        <button className="cart__button">FINALIZAR</button>
      </div>
    </article>
  );
};

export default Cart;

import React from "react";
import "./CartProduct.css";

const CartProduct = ({ data }) => {
  return (
    <div className="cart__product">
      <div className="cart__description">
        <img
          className="cart__image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
          alt={`Imagem do Pokémon ${data.name}`}
        />
        <span>{data.name}</span>
      </div>
      <span>{`$${data.price}`}</span>
    </div>
  );
};

export default CartProduct;

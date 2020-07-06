import React from "react";
import "./Product.css";

const Product = ({ data }) => {
  return (
    <article className="product">
      <div className="product__header">
        <img
          className="product__image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
          alt={`Imagem do Pokémon ${data.name}`}
        />
      </div>
      <div className="product__body">
        <p>{data.name}</p>
        <h3>{`$${data.price}`}</h3>
      </div>
    </article>
  );
};

export default Product;

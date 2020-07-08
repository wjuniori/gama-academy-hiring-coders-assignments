import React from "react";
import "./Modal.css";

const Modal = ({ visible, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div className={`modal ${visible && "modal--visible"}`}>
      <div className="modal__content">
        <h2>Parabéns</h2>
        <p>compra realizada.</p>
        <button className="modal__btn" onClick={handleClick}>
          Fazer novas compras!
        </button>
      </div>
    </div>
  );
};

export default Modal;

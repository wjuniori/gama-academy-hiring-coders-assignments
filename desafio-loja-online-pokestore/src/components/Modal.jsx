import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ visible, onClick }) => {
  const [modalClass, setModalClass] = useState("modal--hidden");

  useEffect(() => {
    setModalClass(visible ? "modal--visible" : "modal--hidden");
  }, [visible]);

  const handleClick = (event) => {
    event.preventDefault();
    setModalClass("modal--hidden");
    onClick();
  };

  return (
    <div className={`modal ${modalClass}`}>
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

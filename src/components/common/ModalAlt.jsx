import React, { useState } from "react";

const ModalAlt = () => {
  const modalHidden = () => {
    return (
      <div className="position-fixed modal-cart bg-primary">
        <p className="text-light">Producto Agregado Al Carrito!</p>
      </div>
    );
  };

  const modalShow = () => {
    setTimeout(() => {
      setModal(modalHidden());
    }, 1500);
    return (
      <div className="position-fixed modal-cart bg-primary modal-cart-visible">
        <p className="text-light">Producto Agregado Al Carrito!</p>
      </div>
    );
  };

  const disableButton = () => {
    setTimeout(() => {
      setDisabledButton("");
    }, 1500);
    return "btn-disabled disabled"
  };

  const [modal, setModal] = useState(modalHidden());
  const [disabledButton, setDisabledButton] = useState("");

  return (
    <div className="btn-agregar-carrito" onClick={() => setModal(modalShow())}>
      <button
        className={`d-block btn btn-primary fs-5 ${disabledButton}`}
        onClick={() => setDisabledButton(disableButton())}
        //   onClick={() => setAddToCart(addToCart + 1)}
      >
        Agregar al carrito
      </button>
      {modal}
    </div>
  );
};

export default ModalAlt;

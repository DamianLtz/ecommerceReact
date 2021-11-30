import React, { useState, useContext } from "react";
import {ContadorUnidades} from "../../contexts/ContadorUnidades"

const ModalAlt = () => {
  const {contador, setContador} = useContext(ContadorUnidades)
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

  const [modal, setModal] = useState(modalHidden());

  return (
    <div className="btn-agregar-carrito" onClick={() => setModal(modalShow())}>
      <button className={`d-block btn btn-primary fs-5`} onClick={""}>
        Agregar al carrito
      </button>
      {modal}
    </div>
  );
};

export default ModalAlt;

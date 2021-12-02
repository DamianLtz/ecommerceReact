import React from "react";
import { Link } from "react-router-dom";

const CartEmptyMsg = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center col-lg-12">
      <h1>Ups! Parece que tu carrito esta vacío</h1>
      <h2 className="pt-5">
        Agrega primero productos a tu carrito para verlos aquí.
      </h2>
      <Link to="/" className="fs-4 pt-5">
        Volver al catalogo
      </Link>
    </div>
  );
};

export default CartEmptyMsg;

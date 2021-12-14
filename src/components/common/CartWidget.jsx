import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import shoppingCart from "../../img/header/shopping-cart.svg";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const contadorProductos = () => {
    return (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        {cart.length}
      </span>
    );
  };
  return (
    <div className="d-flex align-items-center">
      <button className="position-relative shop-cart-container bg-transparent border-0">
        <img src={shoppingCart} alt="" className="shop-cart" />
        {cart.length > 0 ? contadorProductos() : null}
      </button>
      <p className="fw-bold log-in">Ir al Carrito</p>
    </div>
  );
};

export default CartWidget;

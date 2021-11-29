import React, { useContext } from "react";
import { ContadorCartContext } from "../../App";

import shoppingCart from "../../img/header/shopping-cart.svg";

const CartWidget = () => {
  const { contadorCart } = useContext(ContadorCartContext);
  const contadorProductos = () => {
    return (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        {contadorCart}
      </span>
    );
  };
  return (
    <button className="position-relative shop-cart-container bg-transparent border-0">
      <img src={shoppingCart} alt="" className="shop-cart" />
      {contadorCart >= 0 ? contadorProductos() : null}
    </button>
  );
};

export default CartWidget;

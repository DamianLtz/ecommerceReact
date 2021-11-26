import React from "react";

import shoppingCart from "../../img/header/shopping-cart.svg";

const CartWidget = () => {
  let quantity = 1;
  const contadorProductos = () => {
    return (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        {quantity}
      </span>
    );
  };
  return (
    <button className="position-relative shop-cart-container bg-transparent border-0">
      <img src={shoppingCart} alt="" className="shop-cart" />
      {quantity > 0 ? contadorProductos() : null}
    </button>
  );
};

export default CartWidget;

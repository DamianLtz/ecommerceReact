import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import shoppingCart from "../../img/header/shopping-cart.svg";

const listaProductosPrueba = ["Carne","Agua","Tomates","Lechugas"]
// puedo usar ".length" para que el númerito del carrito tome la cantidad de items que hay en el carrito actualmente.

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  console.log(cart)
  const contadorProductos = () => {
    return (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        {cart.length}
      </span>
    );
  };
  return (
    <button className="position-relative shop-cart-container bg-transparent border-0">
      <img src={shoppingCart} alt="" className="shop-cart" />
      {cart.length > 0 ? contadorProductos() : null}
    </button>
  );
};

export default CartWidget;

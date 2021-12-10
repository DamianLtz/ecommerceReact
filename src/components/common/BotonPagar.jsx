import React, { useContext } from "react";
import Coin from "../../img/main/coin.png";
import { CartContext } from "../../contexts/CartContext";
const BotonPagar = ({ total }) => {
  const { cart, clear } = useContext(CartContext);
  // const cartTotal = () => {
  //   const carrito = cart.sort((a, b) => a.order < b.order);
  //   return carrito
  // };
  const cartTotal = (arregloOrigen) => {
    let cartPrice = []; //Aquí se almacenaran los precios
    let totalizado = 0; //Aquí se guardara el total
    let item_precio = 0; // Aquí almacenare el valor de cada articulo en la iteración
    arregloOrigen.map((item) => {
      console.log(item);
      return cartPrice.push(item.price);
    });

    for (let i = 0; i < cartPrice.length; i++) {
      item_precio = cartPrice[i];
      totalizado = totalizado + item_precio;
    }
    return totalizado;
  };

  return (
    <>
      <div className="pt-3">
        <div className="d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center">
            <h4 className="fw-light me-3">{`Total: ${cartTotal(cart)}`}</h4>
            <img src={Coin} alt="" className="coin me-2" />
            <h4 className="fw-light me-3" id="total">
              {total}
            </h4>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              clear();
            }}
          >
            Pagar
          </button>
        </div>
      </div>
      {/* <p className="d-none text-danger text-end pt-2 pe-1 fw-bold">
        Error , puntos insuficientes
      </p> */}
    </>
  );
};

export default BotonPagar;

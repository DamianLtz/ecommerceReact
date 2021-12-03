import React from "react";
import { useCartContext } from "../../contexts/CartContext";

import Coin from "../../img/main/coin.png";
import Add from "../../img/main/carrito/add.svg";
import Minus from "../../img/main/carrito/minus.svg";
import Trash from "../../img/main/carrito/trash.svg";
/* {"precioProducto * cantidadProducto"} */
const ItemCarrito = ({
  producto,
  image,
  title,
  description,
  price,
  id,
  quantity,
  stock,
}) => {
  const { addItem, minusItem, removeItem } = useCartContext();
  return (
    <div className="row align-items-center justify-content-center my-3 my-lg-2 py-lg-4 py-3 box-item-carrito">
      <div className="col-lg-2 col-md-2 col-sm-3 d-flex justify-content-center">
        <img src={image} alt="" className="img-producto-carrito" />
      </div>
      <div className="col-lg-10 col-md-10 col-sm-9">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-4 col-sm-12 gy-lg-0 gy-3">
            <h4 className="text-dark">{title}</h4>
            <p className="text-muted pt-3">{description}</p>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 gy-lg-0 gy-3">
            <div className="d-flex justify-content-lg-evenly justify-content-center align-items-lg-center column-mobile">
              <div className="d-flex align-items-center container-price">
                <div className="d-flex align-items-center py-2 py-lg-0 order-3 order-lg-0">
                  <img src={Coin} alt="" className="coin" />
                  <p className="text-dark fs-4 mx-1 mx-xl-2">{price}</p>
                </div>
                <p className="text-muted pe-0 pe-lg-1">Unidades:</p>
                <div className="container-buttons py-2">
                  <button
                    className="border border-primary p-0 bg-primary rounded-circle"
                    onClick={() => {
                      minusItem(producto, 1);
                    }}
                  >
                    <img src={Minus} alt="restar" />
                  </button>
                  <p className="mx-2 px-2 py-1 border-cantidad">{quantity}</p>
                  <button
                    className="border border-primary p-0 bg-primary rounded-circle"
                    onClick={() => {
                      addItem(producto, 1, stock);
                    }}
                  >
                    <img src={Add} alt="sumar" />
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-danger p-1 mt-2 mt-lg-0 ms-0 ms-lg-1 w-100 d-lg-block d-none"
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  <img src={Trash} alt="" className="coin" />
                </button>
                <button
                  className="btn btn-danger p-1 mt-2 mt-lg-0 ms-0 ms-lg-1 w-100 d-block d-lg-none"
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrito;

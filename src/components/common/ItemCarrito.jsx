import React from "react";

import Coin from "../../img/main/coin.png";
/* {"precioProducto * cantidadProducto"} */
const ItemCarrito = ({ image, title, description, price, quantity }) => {
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
                  <p className="text-dark fs-4 mx-2">{price}</p>
                </div>
                <p className="text-muted pe-0 pe-lg-2">Unidades:</p>
                <div className="container-buttons py-2">
                  <button className="border border-primary p-0 bg-primary rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#fff"
                      className="bi bi-dash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </button>
                  <p className="mx-2 px-2 py-1 border-cantidad">{quantity}</p>
                  <button className="border border-primary p-0 bg-primary rounded-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#fff"
                      className="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <button className="btn btn-danger p-1 mt-2 mt-lg-0 ms-0 ms-lg-1 w-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffffff"
                    className="bi bi-trash d-none d-lg-inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  <p className="d-block d-lg-none">Eliminar</p>
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

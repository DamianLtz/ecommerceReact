import React, { useState } from "react";
import { Link } from "react-router-dom";

import Contador from "./ContadorItems";
import { useCartContext } from "../../contexts/CartContext";
import coin from "../../img/main/coin.png";

const BuyItem = ({ producto }) => {
  const [contador, setContador] = useState(1);
  const { addItem } = useCartContext();
  return (
    <>
      <Contador
        contador={contador}
        setContador={setContador}
        stock={producto.stock}
      />
      <div className="d-flex align-items-center justify-content-center justify-content-md-start my-3">
        <p>Comprar por:</p>
        <img src={coin} alt="" className="coin mx-2" />
        <p>{producto.price}</p>
      </div>
      <div className="d-flex justify-content-center justify-content-md-start mb-3">
        <button
          type="button"
          className="btn btn-primary fs-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            addItem(producto, contador);
            setContador(1);
          }}
        >
          Agregar al carrito
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Producto agregado al carrito!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Seleccione una opción para continuar o presione "X".
              </div>
              <div className="modal-footer">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Seguir comprando
                  </button>
                </Link>
                <Link to="/Carrito">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Ir Al Carrito
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyItem;

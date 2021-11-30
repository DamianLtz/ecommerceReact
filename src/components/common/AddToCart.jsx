import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ContadorUnidades } from "../../contexts/ContadorUnidades";
import { listaProductosContext } from "../../contexts/listaProductos";

const Modal = () => {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { contador, setContador } = useContext(ContadorUnidades);
  const { productos, setProductos } = useContext(listaProductosContext);

  // cart.concat(productos[id])

  return (
    <>
      <button
        type="button"
        className="btn btn-primary fs-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setCart(cart.concat(productos[id]));
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
    </>
  );
};

export default Modal;

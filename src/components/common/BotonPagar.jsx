import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Coin from "../../img/main/coin.png";
import { CartContext } from "../../contexts/CartContext";
const BotonPagar = ({ total }) => {
  const { cart, setCart } = useContext(CartContext);

  const cartTotal = (cart) => {
    let montoTotal = 0;
    for (const producto of cart) {
      montoTotal = montoTotal + producto.price * producto.quantity;
    }
    return montoTotal;
  };

  return (
    <>
      <div className="pt-3">
        <div className="d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center">
            <img src={Coin} alt="" className="coin me-2" />
            <p className="fw-light me-3 fs-4">{`Total: ${cartTotal(cart)}`}</p>
            <h4 className="fw-light me-3">
              {total}
            </h4>
          </div>
          <button className="btn btn-secondary me-2 me-lg-3" onClick={() => setCart([])}>
            Vaciar Carrito
          </button>
          <Link to="/Checkout" className="btn btn-primary">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </>
  );
};

export default BotonPagar;

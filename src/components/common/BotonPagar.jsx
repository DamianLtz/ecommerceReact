import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Coin from "../../img/main/coin.png";
import { CartContext } from "../../contexts/CartContext";
const BotonPagar = ({ total }) => {
  const { cart } = useContext(CartContext);

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
            <h4 className="fw-light me-3">{`Total: ${cartTotal(cart)}`}</h4>
            <img src={Coin} alt="" className="coin me-2" />
            <h4 className="fw-light me-3" id="total">
              {total}
            </h4>
          </div>
          <Link to="/Checkout" className="btn btn-primary">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </>
  );
};

export default BotonPagar;

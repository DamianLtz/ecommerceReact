import React, { useContext } from "react";
import Coin from "../../img/main/coin.png";
import { CartContext } from "../../contexts/CartContext";
const BotonPagar = ({ total }) => {
  const { clear } = useContext(CartContext);
  return (
    <>
      <div className="pt-3">
        <div className="d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center">
            <h4 className="fw-light me-3">Total: </h4>
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

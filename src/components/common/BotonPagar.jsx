import React, { useContext } from "react";
import Coin from "../../img/main/coin.png";
import { CartContext } from "../../contexts/CartContext";
const BotonPagar = ({ total }) => {
  const { setCart } = useContext(CartContext);
  return (
    <>
      <div class="pt-3" id="box-botonPagar">
        <div class="d-flex align-items-center justify-content-end">
          <div class="d-flex align-items-center">
            <h4 class="fw-light me-3">Total: </h4>
            <img src={Coin} alt="" class="coin me-2" />
            <h4 class="fw-light me-3" id="total">
              {total}
            </h4>
          </div>
          <button
            class="btn btn-primary"
            onClick={() => {
              setCart([]);
            }}
          >
            Pagar
          </button>
        </div>
      </div>
      {/* <p class="d-none text-danger text-end pt-2 pe-1 fw-bold">
        Error , puntos insuficientes
      </p> */}
    </>
  );
};

export default BotonPagar;

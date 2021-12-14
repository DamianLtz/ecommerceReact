import React from "react";

import iconoEnvios from "../../img/main/envio.svg";
import iconoPago from "../../img/main/pago.svg";
import iconoTienda from "../../img/main/tienda.svg";

const MainSeccionesEnvios = () => {
  return (
    <section className="container-lg mt-5">
      <div className="row cards-envio-online justify-content-center align-items-center gap-3">
        <div className="col-lg-4 d-flex">
          <img src={iconoEnvios} alt="" />
          <div className="ps-4">
            <h4 className="pb-1">Envío</h4>
            <p>Recibí tu pedido en 10 días</p>
          </div>
        </div>
        <div className="col-lg-4 d-flex">
          <img src={iconoPago} alt="" />
          <div className="ps-4">
            <h4 className="pb-1">Pago seguro</h4>
            <p>Compra 100% seguro</p>
          </div>
        </div>
        <div className="col-lg-4 d-flex">
          <img src={iconoTienda} alt="" />
          <div className="ps-4">
            <h4 className="pb-1">Retiro en tienda</h4>
            <p>Más de 150 sucursales en el país</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSeccionesEnvios;

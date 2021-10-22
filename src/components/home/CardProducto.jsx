import React from "react";
import { Link } from "react-router-dom";

import coin from "../../img/main/coin.png"

const MainCardProducto = ({image, oldPrice , title, description, price , id}) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 gy-4">
      <div className="card position-static text-dark">
        <Link className="bg-img-container" to={`DescripcionProducto/${id}`} id={id}>
          <img
            src={image}
            alt=""
            className="img-fluid position absolute top-0 p-4"
          />
        </Link>
        <div className="card-body">
          <div className="d-flex align-items-center card-descuento-container">
            <div className="card-descuento">
              <p aria-hidden="true">- 15% OFF</p>
            </div>
            <p className="text-muted card-precio-anterior" aria-hidden="true">
              {oldPrice} puntos
            </p>
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="text-muted text-truncate py-3">{description}</p>
          <div className="d-flex align-items-center card-coins-cost">
            <img src={coin} alt="" className="img-fluid coin" />
            <p className="card-text">{price}</p>
          </div>
          <button className="btn btn-comprar shadow-none" id={id}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCardProducto;

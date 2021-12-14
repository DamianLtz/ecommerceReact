import React from "react";
// import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

import coin from "../../img/main/coin.png";

const CardProducto = ({ image, title, price, id }) => {
  return (
    <article className="col-xl-3 col-lg-4 col-md-6 gy-4">
      <div className="card position-static text-dark">
        <Link
          className="bg-img-container"
          to={`/DescripcionProducto/${id}`}
          id={id}
        >
          <img
            src={image}
            alt=""
            className="img-fluid position absolute top-0 p-4"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="text-muted text-truncate py-3">
            Hasta 6 Cuotas Sin Interes
          </p>
          <div className="d-flex align-items-center card-coins-cost">
            <img src={coin} alt="" className="img-fluid coin" />
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProducto;

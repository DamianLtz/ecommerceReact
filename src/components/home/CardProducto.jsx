import React,{ useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

import coin from "../../img/main/coin.png";

const CardProducto = ({ producto, image, oldPrice, title, description, price, id }) => {
  const { addItem } = useCartContext();
  const [contador, setContador] = useState(1);
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
          <div className="d-flex align-items-center card-descuento-container">
            <div className="card-descuento">
              <p aria-hidden="true">- 15% OFF</p>
            </div>
            <p className="text-muted card-precio-anterior" aria-hidden="true">
              {oldPrice} puntos
            </p>
          </div>
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="text-muted text-truncate py-3">{description}</p>
          <div className="d-flex align-items-center card-coins-cost">
            <img src={coin} alt="" className="img-fluid coin" />
            <p className="card-text">{price}</p>
          </div>
          <button
            className="btn btn-comprar shadow-none"
            onClick={() => {
              addItem(producto, contador);
              setContador(1);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProducto;

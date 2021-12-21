import React from "react";
import { Link } from "react-router-dom";
import electro from "../../img/main/electro.png";
import electroBelleza from "../../img/main/electrobelleza.png";

const CardsCategorias = () => {
  return (
    <section className="container mt-5">
      <div className="row justify-content-lg-between justify-content-center">
        <div className="col-lg-6 col-md-12 col-sm-12 rectangle-container mb-lg-0 mb-3">
          <div className="d-flex justify-content-evenly">
            <div>
              <h2 className="fw-normal">Lo Mejor en</h2>
              <h2>Electro</h2>
              <div>
                <Link
                  to="/UnderConstruction"
                  className="btn btn-mas shadow-none">
                  Ver Más
                </Link>
              </div>
            </div>
            <div>
              <img src={electro} alt="" className="img-fluid img-rectangle" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 rectangle-container-sec">
          <div className="d-flex justify-content-evenly">
            <div>
              <h2 className="fw-normal">Lo Mejor en</h2>
              <h2>Electrobelleza</h2>
              <div>
                <Link
                  to="/UnderConstruction"
                  className="btn btn-mas shadow-none">
                  Ver Más
                </Link>
              </div>
            </div>
            <div>
              <img
                src={electroBelleza}
                alt=""
                className="img-fluid img-rectangle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsCategorias;

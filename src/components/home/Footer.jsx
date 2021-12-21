import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-lg mt-5 py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 footer-options py-3 py-lg-0">
            <h4>Mi Cuenta</h4>
            <ul id="footer-options">
              <li>
                <Link to="/UnderConstruction">Crear Cuenta</Link>
              </li>
              <li>
                <Link to="/UnderConstruction">Mis datos</Link>
              </li>
              <li>
                <Link to="/UnderConstruction">Mis canjes</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 footer-options py-3 py-lg-0">
            <h4>Ayuda</h4>
            <ul>
              <li>
                <Link to="/UnderConstruction">Terminos y condiciones</Link>
              </li>
              <li>
                <Link to="/UnderConstruction">Defensa del consumidor</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 footer-options py-3 py-lg-0">
            <h4>Información de la tienda</h4>
            <ul>
              <li>
                <Link to="/UnderConstruction">Argentina</Link>
              </li>
              <li>
                <Link to="/UnderConstruction">Botón de Arrepentimiento</Link>
              </li>
            </ul>
          </div>
        </div>
        <h6 className="text-center text-muted pt-5">
          E-Commerce con React - Damian
        </h6>
      </div>
    </footer>
  );
};

export default Footer;

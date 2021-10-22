import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-lg mt-5 py-5">
        <div className="row">
          <div className="col-lg-4 footer-options py-3 py-lg-0">
            <h4>Mi Cuenta</h4>
            <ul id="footer-options">
              <li>
                <Link to="/registroUsuario">Crear Cuenta</Link>
              </li>
              <li>
                <a href="#/">Mis datos</a>
              </li>
              <li>
                <a href="#/">Mis canjes</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 footer-options py-3 py-lg-0">
            <h4>Ayuda</h4>
            <ul>
              <li>
                <a href="#/">Terminos y condiciones</a>
              </li>
              <li>
                <a href="#/">Defensa del consumidor</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 footer-options py-3 py-lg-0">
            <h4>Información de la tienda</h4>
            <ul>
              <li>
                <a href="#/">Argentina</a>
              </li>
              <li>
                <a href="#/">Botón de Arrepentimiento</a>
              </li>
            </ul>
          </div>
        </div>
        <h6 className="text-center text-muted pt-5">
          Proyecto CoderHouse: E-Commerce - Damian
        </h6>
      </div>
    </footer>
  );
};

export default Footer;

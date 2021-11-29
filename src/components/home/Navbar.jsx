import React from "react";
import { NavLink } from "react-router-dom";

import CartWidget from "../common/CartWidget";


import logo from "../../img/header/logo.svg";
import search from "../../img/header/search.svg";
import coin from "../../img/main/coin.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 position-fixed fixed-top">
      <div className="container-lg">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <form className="d-flex align-items-center form-style">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  aria-label="Search"
                  id="searchInput"
                />
                <button className="me-3 border-0 bg-transparent">
                  <img src={search} alt="" id="searchIcon" />
                </button>
              </form>
            </li>
          </ul>
          <div className="cuenta--container" id="datos-cliente-container">
            <NavLink to="/Carrito">
              <CartWidget />
            </NavLink>
            <div
              className="d-none align-items-center ms-3"
              id="monto-container"
            >
              <img src={coin} alt="" className="coin" />
              <p id="monto"></p>
            </div>
            <NavLink
              to="inicioSesion"
              id="usuario-actual"
              className="fw-bold log-in"
            >
              Ingresar a mi cuenta
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

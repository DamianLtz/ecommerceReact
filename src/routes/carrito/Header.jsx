import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/header/logo.svg";
import search from "../../img/header/search.svg";
import shoppingCart from "../../img/header/shopping-cart.svg";
import coin from "../../img/main/coin.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
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
              <form className="d-flex align-items-center form-style">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  aria-label="Search"
                />
                <a href="#/" className="me-3">
                  <img src={search} alt="" />
                </a>
              </form>
            </ul>
            <div className="cuenta--container" id="datos-cliente-container">
              <div className="shop-cart-container">
                <img src={shoppingCart} alt="" className="shop-cart" />
              </div>
              <div
                className="d-flex align-items-center ms-3"
                id="monto-container"
              >
                <img src={coin} alt="" className="coin" />
                <p id="monto"></p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

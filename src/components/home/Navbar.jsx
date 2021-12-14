import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import logo from "../../img/header/logo.svg";
// import search from "../../img/header/search.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 position-fixed fixed-top">
      <div className="container-lg">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <div className="cuenta--container">
          <NavLink to="/Carrito">
            <CartWidget />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

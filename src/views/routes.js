import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./Home";
import IniciarSesion from "./IniciarSesion";
import RegistroUsuario from "./RegistroUsuario";
import Carrito from "./Carrito";
import DescripcionProducto from "./DescripcionProducto";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={`/DescripcionProducto/:id`}>
          <DescripcionProducto />
        </Route>
        <Route exact path="/inicioSesion">
          <IniciarSesion />
        </Route>
        <Route exact path="/registroUsuario">
          <RegistroUsuario />
        </Route>
        <Route exact path="/Carrito">
          <Carrito />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default routes;

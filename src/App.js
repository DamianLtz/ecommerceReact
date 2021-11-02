import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/home/Home";
import IniciarSesion from "./components/logIn/IniciarSesion";
import RegistroUsuario from "./components/registroUsuario/RegistroUsuario";
import Carrito from "./routes/Carrito";
import DescripcionProducto from "./routes/DescripcionProducto";

function App() {
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
}

export default App;

/* /:id */

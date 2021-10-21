import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import IniciarSesion from "./components/IniciarSesion";
import RegistroUsuario from "./components/RegistroUsuario";
import Carrito from "./routes/Carrito";

function App() {
  return (
    <Router>
      <Switch>
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
}

export default App;

/* /:id */

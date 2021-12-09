import { useState, createContext } from "react";
import { NavLink } from "react-router-dom";
import loginoff from "../img/header/log-off.svg";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const clickRegistro = (clienteNuevo) => {
    if (
      clienteNuevo.nombre !== "" &&
      clienteNuevo.apellido !== "" &&
      clienteNuevo.email !== "" &&
      clienteNuevo.password !== ""
    ) {
      localStorage.setItem("userLogged", JSON.stringify(clienteNuevo));
      setUser(clienteNuevo)
    }
  };
  //eslint-disable-next-line
  const logOff = () => {
    localStorage.setItem("userLogged", JSON.stringify([]));
  };

  const getUser = () => {
    const userLogged = JSON.parse(localStorage.getItem("userLogged"));
    if (userLogged) {
      return (
        <>
          <p className="fw-bold log-in">{`${userLogged.nombre} ${userLogged.apellido}`}</p>
          <button className="btn p-0 shadow-none" onClick={() => {setUser([])}}>
            <img src={loginoff} alt="Cerrar sesión" />
          </button>
        </>
      );
    } else {
      return (
        <NavLink to="/inicioSesion" className="fw-bold log-in">
          Ingresar a mi cuenta
        </NavLink>
      );
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, clickRegistro, logOff, getUser }}
      displayName="User"
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

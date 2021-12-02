import React from "react";

const Contador = ({ contador, setContador, stock }) => {
  return (
    <div className="container-buttons mt-3 justify-content-center justify-content-md-start">
      <button
        className="border border-primary p-0 bg-primary rounded-circle"
        onClick={() => {
          setContador(contador > 1 ? contador - 1 : contador);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          className="bi bi-dash"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
      <p
        className="mx-2 px-2 py-1 border-cantidad border-cantidad"
        id="contador"
      >
        {contador}
      </p>
      <button
        className="border border-primary p-0 bg-primary rounded-circle"
        onClick={() => {
          setContador(contador < stock ? contador + 1 : contador);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  );
};

export default Contador;

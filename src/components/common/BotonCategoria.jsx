import React from "react";

const BotonCategoria = ({ categoria }) => {
  return (
    <button
      href="#"
      className="btn shadow-none btn-drop-shadow p-0 col-lg-2 col-md-3 col-sm-4 col-xs-6 gy-4 gy-lg-0"
      id={categoria.id}
    >
      <div className="btn-categoria-container">
        <div className="btn-categoria">
          <img src={categoria.image} alt="" />
          <p className="d-none d-sm-block">{categoria.name}</p>
        </div>
      </div>
      <p className="d-sm-none d-block mb-4 mt-1 fw-bold">{categoria.name}</p>
    </button>
  );
};

export default BotonCategoria;

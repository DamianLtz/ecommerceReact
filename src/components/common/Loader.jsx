import React from "react";

const Loader = () => {
  return (
    <section className="main-principal">
      <div className="container">
        <div className="showbox">
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle
                className="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;

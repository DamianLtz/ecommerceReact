import React from "react";

import CarouselOne from "../../img/main/banner1.jpg";
import CarouselTwo from "../../img/main/banner4.jpg";
import CarouselThree from "../../img/main/banner6.jpg";
import CarouselFour from "../../img/main/banner7.webp";
import CarouselFive from "../../img/main/banner8.png";

const MainCarousel = () => {
  return (
    <section>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={CarouselOne}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>Auriculares Razer</h2>
              <p>Distribuidor oficial de Razer!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={CarouselTwo}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>Nuevo iPhone 12</h2>
              <p>Súper. Mega. Rápido.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={CarouselThree}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>MacBook Air</h2>
              <p>Un nuevo poder toma vuelo.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={CarouselFour}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>Haus Laboratories</h2>
              <p>Maquillaje estreno en nuestra tienda!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={CarouselFive}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h2>Notebooks MSI</h2>
              <p>Ideales para todo tipo de jugadores.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default MainCarousel;

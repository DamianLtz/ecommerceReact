import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import CarouselOne from "../../img/main/banner1.jpg";
import CarouselTwo from "../../img/main/banner4.jpg";
import CarouselThree from "../../img/main/banner6.jpg";
import CarouselFour from "../../img/main/banner7.webp";
import CarouselFive from "../../img/main/banner8.png";

const MainCarouselAlt = () => {
  return (
    <Carousel
      autoPlay={false}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      dynamicHeight={true}
      transitionTime={450}
    >
      <div className="carousel-alt-item">
        <img src={CarouselOne} alt="" />
        <div className="container-title-carousel">
          <h2 className="title-carousel">Auriculares Razer</h2>
          <p className="subtitle-carousel">Distribuidor oficial de Razer!</p>
        </div>
      </div>
      <div className="carousel-alt-item">
        <img src={CarouselTwo} alt="" />
        <div className="container-title-carousel">
          <h2 className="title-carousel">Haus Laboratories</h2>
          <p className="subtitle-carousel">Maquillaje estreno en nuestra tienda!</p>
        </div>
      </div>
      <div className="carousel-alt-item">
        <img src={CarouselThree} alt="" />
        <div className="container-title-carousel">
          <h2 className="title-carousel">Nuevo iPhone 12</h2>
          <p className="subtitle-carousel">Súper. Mega. Rápido.</p>
        </div>
      </div>
      <div className="carousel-alt-item">
        <img src={CarouselFour} alt="" />
        <div className="container-title-carousel">
          <h2 className="title-carousel">Nuevo Moto G100</h2>
          <p className="subtitle-carousel">El más potente del 2021</p>
        </div>
      </div>
      <div className="carousel-alt-item">
        <img src={CarouselFive} alt="" />
        <div className="container-title-carousel">
          <h2 className="title-carousel">Carolina Herrera Good Girl</h2>
          <p className="subtitle-carousel">Fragancia Importada</p>
        </div>
      </div>
    </Carousel>
  );
};

export default MainCarouselAlt;

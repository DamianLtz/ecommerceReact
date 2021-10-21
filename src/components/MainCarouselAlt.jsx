import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import FirstImage from "../img/main/banner1.jpg";
import SecondImage from "../img/main/banner2.jpg";
import ThirdImage from "../img/main/banner3.jpg";
import FourthImage from "../img/main/banner4.jpg"
import FifthImage from "../img/main/banner5.jpg"

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
      <div>
        <img src={FirstImage} alt="" />
      </div>
      <div>
        <img src={SecondImage} alt="" />
      </div>
      <div>
        <img src={ThirdImage} alt="" />
      </div>
      <div>
        <img src={FourthImage} alt="" />
      </div>
      <div>
        <img src={FifthImage} alt="" />
      </div>
    </Carousel>
  );
};

export default MainCarouselAlt;

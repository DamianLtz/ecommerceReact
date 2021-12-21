import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Carousel } from "react-responsive-carousel";

const MainCarouselAlt = () => {
  const [carousel, setCarousel] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "Carousel");

    getDocs(productosCollection).then((snapshot) => {
      setCarousel(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return carousel.length ? (
    <Carousel
      autoPlay={true}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      dynamicHeight={true}
      transitionTime={450}>
      {carousel.map((item) => {
        return (
          <div className="carousel-alt-item" key={item.title}>
            <img src={item.image} alt={`${item.title}`} />
            <div className="container-title-carousel">
              <h2 className="title-carousel">{item.title}</h2>
              <p className="subtitle-carousel">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  ) : null;
};

export default MainCarouselAlt;

import React from "react";
import "./styles/Carousel.css";

const Carousel = ({ children }) => (
  <section className="carousel1">
    <div className="carousel__container1">{children}</div>
  </section>
);

export default Carousel;

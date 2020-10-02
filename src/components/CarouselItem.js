import React from "react";
import "./styles/CarouselItem.css";
import playIcon from "../images/play-icon.png";
import plusIcon from "../images/plus-icon.png";

const CarouselItem = ({ children, title, age, edad, time, image }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={image} alt="" />
    <div className="carousel-item__details">
      <div className="carousel-item__details-container">
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={plusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {age} | {edad} | {time}
      </p>
    </div>
    {children}
  </div>
);

export default CarouselItem;

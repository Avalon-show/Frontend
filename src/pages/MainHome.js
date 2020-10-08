//Home despues del login
import React from "react";
// import "./styles/HomeLanding.css";

import NavbarMain from "../components/NavbarMain";
import HeaderVideo from "../components/HeaderVideo";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import List from "../components/List";
import List2 from "../components/List2";
import List3 from "../components/List3";
import Footer from "../components/Footer";

class HomeMain extends React.Component {
  render() {
    return (
      <section className="bg-black">
        <NavbarMain />
        <HeaderVideo />
        <Categories title="Seguir Viendo Mi Contenido">
          <Carousel>
            <List />

            {/* <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg"
            /> } */}
          </Carousel>
        </Categories>

        <Categories title="Contenido Exclusivo">
          <Carousel>
            <List2 />
          </Carousel>
        </Categories>

        <Categories title="Nuevos Lanzamientos">
          <Carousel>
            <List3 />
          </Carousel>
        </Categories>

        <Footer />
      </section>
    );
  }
}

export default HomeMain;

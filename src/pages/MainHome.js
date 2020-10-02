//Home despues del login
import React from "react";
// import "./styles/HomeLanding.css";

import NavbarMain from "../components/NavbarMain";
import HeaderVideo from "../components/HeaderVideo";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

class HomeMain extends React.Component {
  render() {
    return (
      <section className="bg-red-900">
        <NavbarMain />
        <HeaderVideo />

        <Categories title="Seguir Viendo Mi Contenido">
          <Carousel>
            <CarouselItem
              title="Peli1"
              age="Año 2019"
              edad="16+"
              time="119 min"
              image="https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655_960_720.jpg"
            />
            <CarouselItem
              title="Peli2"
              age="Año 2018"
              edad="13+"
              time="100 min"
              image="https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433327_960_720.jpg"
            />
            <CarouselItem
              title="Peli3"
              age="Año 2009"
              edad="16+"
              time="125 min"
              image="https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009_960_720.jpg"
            />
            <CarouselItem
              title="Peli4"
              age="Año 2019"
              edad="16+"
              time="60 min"
              image="https://cdn.pixabay.com/photo/2018/03/20/22/04/camera-3244872_960_720.jpg"
            />
            <CarouselItem
              title="Peli5"
              age="Año 2008"
              edad="16+"
              time="109 min"
              image="https://cdn.pixabay.com/photo/2013/04/11/02/20/film-102681_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg"
            />
          </Carousel>
        </Categories>

        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2012/11/04/08/23/cinema-strip-64074_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2016/10/04/08/58/theater-1713816_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2020/02/27/18/54/popcorn-4885565_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2020/04/20/18/10/cinema-5069314_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2019/02/09/18/41/camera-3985711_960_720.jpg"
            />
          </Carousel>
        </Categories>

        <Categories title="Contenido Exclusivo">
          <Carousel>
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2019/02/09/18/41/camera-3985711_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2019/02/09/18/41/camera-3985711_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2019/02/09/18/41/camera-3985711_960_720.jpg"
            />
            <CarouselItem
              title="Peli6"
              age="Año 2020"
              edad="12+"
              time="200 min"
              image="https://cdn.pixabay.com/photo/2019/02/09/18/41/camera-3985711_960_720.jpg"
            />
          </Carousel>
        </Categories>

        <Footer />
      </section>
    );
  }
}

export default HomeMain;

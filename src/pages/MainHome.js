//Home despues del login
import React from "react";
import "./styles/Main.css";

import NavbarMain from "../components/NavbarMain";
import HeaderVideo from "../components/HeaderVideo";
import Categories from "../components/Categories";
import Carousell from "../components/Carousel";
import List from "../components/List";
import List2 from "../components/List2";
import List3 from "../components/List3";
import Footer from "../components/Footer";
import Carousel from 'react-elastic-carousel';

class HomeMain extends React.Component {
  render() {
    return (
      <section className="bg-black main">
        <NavbarMain />
        <HeaderVideo />
        <Categories title="Seguir Viendo Mi Contenido">
          <Carousell>
            <List />
          </Carousell>
        </Categories>

        <Categories title="Contenido Exclusivo">
          <Carousell>
            <List2 />
          </Carousell>
        </Categories>

        <Categories title="Nuevos Lanzamientos">
          <Carousell>
            <List3 />
          </Carousell>
        </Categories>

        <Footer />
      </section>
    );
  }
}

export default HomeMain;

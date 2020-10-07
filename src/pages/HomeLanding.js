import React from "react";
import "./styles/HomeLanding.css";

import Navbar from "../components/Navbar";
import HomeCenter from "../components/HomeCenter";
// import FormEmail from "../components/FormEmail";
import HomeSection from "../components/HomeSection";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import Footer from "../components/Footer";
import ListFAQ from "../components/ListFAQ";

class HomeLanding extends React.Component {
  render() {
    return (
      <section className="bg-black hero">
        <Navbar />
        <HomeCenter />
        <HomeSection />
        <HomeSection2 />
        <HomeSection3 />
        <ListFAQ />
        <Footer />
      </section>
    );
  }
}

export default HomeLanding;

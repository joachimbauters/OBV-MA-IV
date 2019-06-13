import React from "react";
//import styles from "./Home.module.css";
import Header from "../components/website/Header";
import Intro from "../components/website/Intro";
import Populair from "../components/website/Popular";
import Footer from "../components/website/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Populair />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
//import styles from "./Home.module.css";
import Header from "../components/website/Header";
import Intro from "../components/website/Intro";
import Populair from "../components/website/Popular";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Populair />
    </>
  );
};

export default Home;

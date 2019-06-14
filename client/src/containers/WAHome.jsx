import React from "react";
import videolink from "../assets/intro_movie_f.mp4";
import { Link } from "react-router-dom";
import styles from "./WAHome.module.css";

import Button from "../components/Button";

const Operaonwheels = ({ typevervoer, stoelnummer, voertuignummer }) => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.hide}>introvideo</h1>
        <Link
          className={styles.button}
          to={`/taal/${typevervoer}/${voertuignummer}/${stoelnummer}`}
        >
          <Button type="white" text="Volgende" />
        </Link>

        <video className={styles.video} autoPlay loop>
          <source src={videolink} type="video/mp4" />
          Your browser does not support video.
        </video>
      </section>
    </>
  );
};

export default Operaonwheels;

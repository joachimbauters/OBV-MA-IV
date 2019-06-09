import React from "react";
import { Link } from "react-router-dom";
import styles from "./WATaal.module.css";
import img from "../assets/obvlanguage.png";

const WATaal = ({ typevervoer, voertuignummer, stoelnummer }) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.foto}>
            <h1 className={styles.hide}>Opera on wheels</h1>
            <img
              src={img}
              className={styles.picture}
              alt="Opera on wheels een vrouw die door het logo van obv springt"
            />
          </div>
          <div className={styles.talengrid}>
            <Link
              className={styles.link}
              to={`/verhalen/${typevervoer}/${voertuignummer}/${stoelnummer}`}
            >
              <div className={styles.taal}>
                <p className={styles.tussentitel}>Hallo, welkom!</p>
                <h2 className={styles.titel}>Nederlands</h2>
              </div>
            </Link>
            <Link
              className={styles.link}
              to={`/verhalen/${typevervoer}/${voertuignummer}/${stoelnummer}`}
            >
              <div className={styles.taal}>
                <p className={styles.tussentitel}>Bonjour, bienvenue!</p>
                <h2 className={styles.titel}>Français</h2>
              </div>
            </Link>
            <Link
              className={styles.link}
              to={`/verhalen/${typevervoer}/${voertuignummer}/${stoelnummer}`}
            >
              <div className={styles.taal}>
                <p className={styles.tussentitel}>Hello, welcome!</p>
                <h2 className={styles.titel}>English</h2>
              </div>
            </Link>
            <Link
              className={styles.link}
              to={`/verhalen/${typevervoer}/${voertuignummer}/${stoelnummer}`}
            >
              <div className={styles.taal}>
                <p className={styles.tussentitel}>Guten tag, Wilkommen!</p>
                <h2 className={styles.titel}>English</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WATaal;

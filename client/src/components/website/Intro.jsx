import React from "react";
import styles from "./Intro.module.css";
import introimg from "../../assets/introimg.png";

const Intro = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <article className={styles.introgrid}>
            <div className={styles.titleflex}>
              <h1 className={styles.introtitel}>
                Op zoek naar <span className={styles.intropink}>verhalen</span>{" "}
                van de maatschappij
              </h1>
              <p className={styles.introtext}>
                Dagelijks nemen gemiddeld 2.140.000 mensen het openbaar vervoer,
                met elk hun eigen verhaal. Wij van Opera Ballet Vlaanderen
                willen die verhalen die leven in onze de maatschappij ontdekken.
                Daarom kun je ons initiatief vinden in het openbaar vervoer in
                en rond Gent en Antwerpen.{" "}
              </p>
            </div>
            <div>
              <img
                src={introimg}
                className={styles.introimg}
                alt="een man die verwerkt zit in het logo van opera ballet vlaanderen"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Intro;

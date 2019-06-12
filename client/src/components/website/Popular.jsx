import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import styles from "./Popular.module.css";

const Popular = ({ verhalenStore }) => {
  const { verhalen } = verhalenStore;

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.introtitel}>
            Populaire <span className={styles.intropink}>verhalen</span>
          </h1>
          {verhalen.length > 0 ? (
            <ul>
              {verhalen.slice(0, 5).map(verhaal => (
                <li key={verhaal.id}>
                  <article>
                    <h1 className={styles.vraag}>{verhaal.vraag}</h1>
                    <p className={styles.verhaal}>{verhaal.verhaal}</p>
                    <div>
                      <div>
                        <h2 className={styles.naam}>{verhaal.naam}</h2>
                        <p className={styles.leeftijd}>{verhaal.leeftijd}</p>
                      </div>
                      <p className={styles.locatie}>
                        {verhaal.date} op {verhaal.typevervoer}
                        {verhaal.voertuignummer}, stoel {verhaal.stoelnummer}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p>Tijdelijk geen verhalen beschikbaar :(</p>
          )}
          <button>Ontdek meer verhalen</button>
        </div>
      </section>
    </>
  );
};

Popular.propTypes = {
  verhalenStore: PropTypes.observableObject.isRequired
};

export default inject(`verhalenStore`)(observer(Popular));

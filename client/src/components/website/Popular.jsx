import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import styles from "./Popular.module.css";

const Popular = ({ verhalenStore }) => {
  const { verhalen } = verhalenStore;

  const TextAbstract = (text, length) => {
    if (text == null) {
      return "";
    }
    if (text.length <= length) {
      return text;
    }
    text = text.substring(0, length);
    const last = text.lastIndexOf(" ");
    text = text.substring(0, last);
    return text + "...";
  };

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.introtitel}>
            Populaire <span className={styles.intropink}>verhalen</span>
          </h1>
          {verhalen.length > 0 ? (
            <ul className={styles.flexcards}>
              {verhalen.slice(0, 5).map(verhaal => (
                <li key={verhaal.id} className={styles.card}>
                  <article className={styles.cardgrid}>
                    <h1 className={styles.vraag}>{verhaal.vraag}</h1>
                    <p className={styles.verhaal}>
                      {TextAbstract(verhaal.verhaal, 300)}
                    </p>
                    <div className={styles.gegevensgrid}>
                      <div className={styles.persoon}>
                        <h2 className={styles.naam}>{verhaal.naam}</h2>
                        <p className={styles.leeftijd}>
                          {verhaal.leeftijd} jaar
                        </p>
                      </div>
                      <p className={styles.locatie}>
                        {verhaal.date} op {verhaal.typevervoer}
                        {verhaal.voertuignummer}, stoel {verhaal.stoelnummer}
                      </p>
                      <button className={styles.leesmeer}>Lees meer</button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p>Tijdelijk geen verhalen beschikbaar :(</p>
          )}
          <button className={styles.ontdekmeer}>Ontdek meer verhalen</button>
        </div>
      </section>
    </>
  );
};

Popular.propTypes = {
  verhalenStore: PropTypes.observableObject.isRequired
};

export default inject(`verhalenStore`)(observer(Popular));

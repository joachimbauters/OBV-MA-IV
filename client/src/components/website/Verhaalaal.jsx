import React, { Component } from "react";
import { PropTypes, inject, observer } from "mobx-react";
import styles from "../../containers/Verhalen.module.css";
import cross from "../../assets/exit.svg";
import img1 from "../../assets/opera1.png";
import img2 from "../../assets/opera2.png";
import droevig from "../../assets/droevig.svg";
import grappig from "../../assets/grappig.svg";
import verbaasd from "../../assets/verbaasd.svg";
import verliefd from "../../assets/verliefd.svg";

class Verhaalaal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grow: 0
    };
  }

  setGrowMode = id => this.setState({ grow: id });

  render() {
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

    const { grow } = this.state;
    const { verhalenStore, count } = this.props;
    const { verhalen } = verhalenStore;

    return (
      <>
        {verhalen.slice(0, count).map(verhaal => (
          <li
            key={verhaal.id}
            className={grow === verhaal.id ? styles.cardgrow : styles.card}
          >
            {grow === verhaal.id ? (
              <article className={styles.cardgrid2}>
                <h1 className={styles.vraag}>{verhaal.vraag}</h1>
                <p className={styles.verhaal}>{verhaal.verhaal}</p>
                <div className={styles.gegevensgrid}>
                  <div className={styles.persoon}>
                    <h2 className={styles.naam}>{verhaal.naam}</h2>
                    <p className={styles.leeftijd}>{verhaal.leeftijd} jaar</p>
                  </div>
                  <p className={styles.locatie}>
                    {verhaal.date} op {verhaal.typevervoer}
                    {verhaal.voertuignummer}, stoel {verhaal.stoelnummer}
                  </p>
                </div>
                <div className={styles.vergelijkbareopera}>
                  <h2 className={styles.operaverhalentitel}>
                    Vergelijkbare opera verhalen
                  </h2>
                  <div>
                    <img
                      src={img1}
                      alt="la boheme"
                      className={styles.operaimg}
                    />
                    <img
                      src={img2}
                      alt="madamme butterfly"
                      className={styles.operaimg}
                    />
                  </div>
                </div>
                <div className={styles.ratingbuttns}>
                  <button className={styles.ratingbuttn}>
                    <img
                      src={verliefd}
                      alt={verhaal.rating.verliefd.type}
                      className={styles.emoji}
                    />
                    <p>{verhaal.rating.verliefd.value}</p>
                  </button>
                  <button className={styles.ratingbuttn}>
                    <img
                      src={verbaasd}
                      alt={verhaal.rating.verbaasd.type}
                      className={styles.emoji}
                    />
                    <p>{verhaal.rating.verbaasd.value}</p>
                  </button>
                  <button className={styles.ratingbuttn}>
                    <img
                      src={droevig}
                      alt={verhaal.rating.droevig.type}
                      className={styles.emoji}
                    />
                    <p>{verhaal.rating.droevig.value}</p>
                  </button>
                  <button className={styles.ratingbuttn}>
                    <img
                      src={grappig}
                      alt={verhaal.rating.grappig.type}
                      className={styles.emoji}
                    />
                    <p>{verhaal.rating.grappig.value}</p>
                  </button>
                </div>
                <button
                  className={styles.leesmeer2}
                  onClick={() => this.setGrowMode(0)}
                >
                  <img src={cross} alt="" />
                </button>
              </article>
            ) : (
              <article className={styles.cardgrid}>
                <h1 className={styles.vraag}>{verhaal.vraag}</h1>
                <p className={styles.verhaal}>
                  {TextAbstract(verhaal.verhaal, 200)}
                </p>
                <div className={styles.gegevensgrid}>
                  <div className={styles.persoon}>
                    <h2 className={styles.naam}>{verhaal.naam}</h2>
                    <p className={styles.leeftijd}>{verhaal.leeftijd} jaar</p>
                  </div>
                  <p className={styles.locatie}>
                    {verhaal.date} op {verhaal.typevervoer}
                    {verhaal.voertuignummer}, stoel {verhaal.stoelnummer}
                  </p>
                  <button
                    className={styles.leesmeer}
                    onClick={() => this.setGrowMode(verhaal.id)}
                  >
                    Lees meer
                  </button>
                </div>
              </article>
            )}
          </li>
        ))}
      </>
    );
  }
}

Verhaalaal.propTypes = {
  verhalenStore: PropTypes.observableObject.isRequired
};

export default inject(`verhalenStore`)(observer(Verhaalaal));

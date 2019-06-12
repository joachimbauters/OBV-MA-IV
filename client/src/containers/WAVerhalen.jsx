import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes, inject, observer } from "mobx-react";
import styles from "./WAVerhalen.module.css";
import Button from "../components/Button";
import Siema from "siema";

class WAVerhalen extends Component {
  constructor(props) {
    super(props);
    this.state = { scroll: false };
  }

  setScrollMode = value => this.setState({ scroll: value });

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.siema = new Siema();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
    this.siema = new Siema();
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    if (scrolled >= 0.3) {
      this.setScrollMode(true);
    } else {
      this.setScrollMode(false);
    }
  };

  render() {
    const { scroll } = this.state;
    const { verhalenStore } = this.props;
    const { verhalen } = verhalenStore;
    const { typevervoer, voertuignummer, stoelnummer } = this.props;
    const filter = verhalen.filter(item => item.typevervoer == typevervoer); // eslint-disable-line
    const filter1 = filter.filter(
      item => item.voertuignummer == voertuignummer // eslint-disable-line
    );
    const filter2 = filter1.filter(item => item.stoelnummer == stoelnummer); // eslint-disable-line

    return (
      <>
        <div className={styles.container}>
          <section className={styles.intro}>
            <h1 className={styles.hide}>verhalen intro</h1>
            <Link
              className={styles.link}
              to={`/taal/${typevervoer}/${voertuignummer}/${stoelnummer}`}
            >
              <div className={styles.back}>
                <p>
                  Terug naar <span className={styles.highlight}>talen</span>
                </p>
              </div>
            </Link>
            <p className={styles.subtext}>
              Dagelijks nemen gemiddeld 2.140.000 mensen het openbaar vervoer,
              met elk hun eigen verhaal. Het is juist in die verhalen dat wij
              van Opera Ballet Vlaanderen veel waarde zien.
            </p>
            <p className={styles.hoofdtext}>
              Hieronder vind je de verhalen van mensen die eerder in jouw stoel
              plaats namen.
            </p>
            <div className={styles.swipeupcontainer}>
              <a href="#bottom" className={styles.swipeup}>
                <span />
              </a>
              <p>swipe up</p>
            </div>
          </section>
          <section className={styles.verhalen}>
            <h1 className={styles.hide}>verhalen mensen op jouw stoel</h1>
            {filter2.length > 0 ? (
              <div className="siema">
                {filter2.map(verhaal => (
                  <article key={verhaal.id} className={styles.cell}>
                    <div className={styles.identiteit}>
                      <h1 className={styles.naam}>{verhaal.naam}</h1>
                      <p className={styles.leeftijd}>{verhaal.leeftijd} jaar</p>
                      <p className={styles.locatie}>
                        {verhaal.date} op {verhaal.typevervoer}
                        {verhaal.voertuignummer}, stoel {verhaal.stoelnummer}
                      </p>
                    </div>
                    <h2 className={styles.vraag}>{verhaal.vraag}</h2>
                    <p className={styles.verhaal}>{verhaal.verhaal}</p>
                  </article>
                ))}
              </div>
            ) : (
              <article className={styles.cell}>
                <p className={styles.noseat}>
                  Jij kan de eerste zijn die zijn verhaal deelt op deze zetel!
                </p>
              </article>
            )}
            <div className={styles.button}>
              <Link
                className={styles.link}
                to={`/form/${typevervoer}/${voertuignummer}/${stoelnummer}`}
              >
                <Button type="pink" text="Vertel jouw verhaal" />
              </Link>
            </div>
          </section>
          <div className={styles.barcontainer}>
            <div
              className={scroll ? styles.progressline25 : styles.progressline12}
            />
          </div>
        </div>
      </>
    );
  }
}

WAVerhalen.propTypes = {
  verhalenStore: PropTypes.observableObject.isRequired
};

export default inject(`verhalenStore`)(observer(WAVerhalen));

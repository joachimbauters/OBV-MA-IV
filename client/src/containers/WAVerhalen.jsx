import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./WAVerhalen.module.css";

import Button from "../components/Button";

class WAVerhalen extends Component {
  constructor(props) {
    super(props);
    this.state = { scroll: false };
  }

  setScrollMode = value => this.setState({ scroll: value });

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    if (scrolled >= 0.5) {
      this.setScrollMode(true);
    } else {
      this.setScrollMode(false);
    }
  };

  render() {
    const { scroll } = this.state;
    //const { voertuignummer, stoelnummer } = this.props;

    return (
      <>
        <div className={styles.container}>
          <section className={styles.intro}>
            <h1 className={styles.hide}>verhalen intro</h1>
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
            <Button type="pink" text="Vertel jouw verhaal" />
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

export default WAVerhalen;

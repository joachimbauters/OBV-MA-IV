import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./WABedankt.module.css";
import Button from "../components/Button";
import img from "../assets/bedankt.png";
import Popup from "../components/Popup";

class WABedankt extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentWillMount() {
    this.togglePopup();
  }

  render() {
    return (
      <>
        <section className={styles.container}>
          <div className={styles.flex}>
            <div>
              <h1 className={styles.title}>Bedankt</h1>
              <img
                className={styles.foto}
                src={img}
                alt="man die viool speelt en ingewerkt is in de letters van opera ballet vlaanderen"
              />
              <h2 className={styles.subtitle}>Om jouw verhaal te delen</h2>
            </div>
            <p className={styles.text}>
              Wij zullen ons laten inspireren door jouw verhaal
            </p>
            <div className={styles.buttons}>
              <Link to={`/jullieverhalen`}>
                <Button type="outline" text="Lees verhalen van passagiers" />
              </Link>
              <a href="https://www.operaballet.be/nl/programma/2018-2019">
                <Button type="white" text="Ontdek onze voorstellingen" />
              </a>
            </div>
          </div>
          {this.state.showPopup ? (
            <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
          ) : null}
          <div className={styles.barcontainer}>
            <div className={styles.progressline100} />
          </div>
        </section>
      </>
    );
  }
}

export default WABedankt;

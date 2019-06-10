import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./Vragen.module.css";

class Vragen extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.hide}>vragen</h1>
          <p className={styles.text}>
            Nu je wat inpiratie hebt opgedaan, kun je één van deze
            vooropgestelde vraag kiezen om jouw verhaal te vertellen.
          </p>
          <h2 className={styles.label}>
            Kies 1 van de volgende vragen waar jij wat over wilt vertellen.
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.switchfield}>
              <input type="radio" id="vraag1" name="vraag" />
              <label htmlFor="vraag1">
                Ballerina’s kunnen door middel van gebaren emoties uitdrukken,
                maar wat is het mooiste gebaar dat iemand voor u heeft gedaan?
              </label>
              <input type="radio" id="vraag2" name="vraag" />
              <label htmlFor="vraag2">
                Vaak reizen ballet producties de hele werled rond, maar wat is
                uw mooiste reis herinnering?
              </label>
              <input type="radio" id="vraag3" name="vraag" />
              <label htmlFor="vraag3">
                Vele Opera voorstellingen gaan over passie, maar wat is jouw
                grootste passie?
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Vragen;

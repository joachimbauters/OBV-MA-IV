import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./Privacy.module.css";

class Privacy extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.outline}>Wij waarderen</span> jouw privacy
          </h1>
          <p className={styles.text}>
            Omdat niet iedereen zijn verhaal openbaar wilt delen, geven wij je
            de optie om te kiezen wie jouw verhaal mag lezen.
          </p>
          <div className={styles.check1}>
            <label htmlFor="check1" className={styles.checkcontainer}>
              <input
                type="checkbox"
                id="check1"
                name="check1"
                className={styles.checkbox}
              />
              <span className={styles.checkmark} />
            </label>
            <p className={styles.voorwaardentext}>
              Mensen die op dezelfde plaats als mij zitten mogen mijn verhaal
              niet lezen.
            </p>
          </div>
          <div className={styles.check2}>
            <label htmlFor="check2" className={styles.checkcontainer}>
              <input
                type="checkbox"
                id="check2"
                name="check2"
                className={styles.checkbox}
              />
              <span className={styles.checkmark} />
            </label>
            <p className={styles.voorwaardentext}>
              Mensen mogen mij verhaal niet lezen op de website.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Privacy;

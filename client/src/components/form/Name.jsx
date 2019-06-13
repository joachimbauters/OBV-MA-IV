import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Name.module.css";

class Name extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    const { typevervoer, voertuignummer, stoelnummer } = this.props;
    return (
      <>
        <div className={styles.container}>
          <Link
            className={styles.link}
            to={`/verhalen/${typevervoer}/${voertuignummer}/${stoelnummer}`}
          >
            <div className={styles.back}>
              <p>
                Terug naar <span className={styles.highlight}>verhalen</span>
              </p>
            </div>
          </Link>
          <h1 className={styles.title}>
            <span className={styles.outline}>Wie ben</span> jij?
          </h1>
          <p className={styles.text}>
            Graag hadden we nu ook jouw verhaal te weten gekomen! Om er iets
            moois van te maken zullen we eerst wat input verzamelen.
          </p>
          <div className={styles.input}>
            <label htmlFor="naam">
              Om te beginnen, hoe heet je? Je voornaam volstaat.
            </label>
            <input
              type="text"
              placeholder="Mijn naam is..."
              id="naam"
              name="naam"
              value={this.props.naam}
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className={styles.voorwaarden}>
            <label htmlFor="voorwaarden" className={styles.checkcontainer}>
              <input
                type="checkbox"
                id="voorwaarden"
                name="voorwaarden"
                className={styles.checkbox}
                required
              />
              <span className={styles.checkmark} />
            </label>
            <p className={styles.voorwaardentext}>
              Ik ben akkoord met de{" "}
              <span className={styles.underline}>algemene voorwaarden</span> en
              het <span className={styles.underline}>privacybeleid</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Name;

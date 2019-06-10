import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./Leeftijd.module.css";

class Leeftijd extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.outline}>Welkom</span>{" "}
            {this.props.naam === "" ? "Reiziger" : this.props.naam}!
          </h1>
          <div className={styles.input}>
            <label htmlFor="leeftijd">
              Leuk je te leren kennen,{" "}
              {this.props.naam === "" ? "Reiziger" : this.props.naam}! Mogen wij
              je vragen wat jouw leeftijd is?
            </label>
            <div className={styles.inputflex}>
              <input
                type="number"
                placeholder="Leeftijd..."
                id="leeftijd"
                name="leeftijd"
                min="1"
                max="130"
                value={this.props.leeftijd}
                onChange={this.props.handleChange}
              />
              <p className={styles.jaar}>Jaar</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Leeftijd;

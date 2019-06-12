import React, { Component } from "react";
import styles from "./Verhaal.module.css";
import Chart from "./Chart";

class Verhaal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLength: 500,
      currentTweet: ""
    };
  }

  setCurrentTweet = value => {
    this.setState({ currentTweet: value });
  };

  get charsLeft() {
    return this.state.maxLength - this.state.currentTweet.length;
  }

  render() {
    if (this.props.currentStep !== 5) {
      return null;
    }

    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.outline}>Vertel ons</span> jouw verhaal
          </h1>
          <p className={styles.text}>
            Ballerina’s kunnen door middel van gebaren emoties uitdrukken,{" "}
            <span className={styles.highlight}>
              maar wat is het mooiste gebaar dat iemand voor u heeft gedaan?
            </span>
          </p>
          <div className={styles.area}>
            <textarea
              className={styles.textarea}
              placeholder="Vertel hier je verhaal..."
              maxLength={this.state.maxLength}
              value={this.state.currentTweet}
              name="verhaal"
              onChange={e => {
                this.setCurrentTweet(e.currentTarget.value);
                this.props.handleChange(e);
              }}
            />
            <div className={styles.chart}>
              <Chart value={this.charsLeft} max={this.state.maxLength} />
            </div>
          </div>
        </div>
        <button className={styles.button}>Mijn verhaal is af</button>
      </>
    );
  }
}

export default Verhaal;

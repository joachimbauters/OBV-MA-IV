import React, { Component } from "react";
import styles from "./Verhaal.module.css";
import Chart from "./Chart";
import vragen from "../../constants/vragen.json";

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

    const arr1 = vragen.filter(element => element.id == this.props.vraag); // eslint-disable-line

    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.outline}>Vertel ons</span> jouw verhaal
          </h1>
          <p className={styles.text}>
            {arr1.map(vraag => (
              <p>{vraag.vraag}</p>
            ))}
          </p>
          <div className={styles.area}>
            <textarea
              className={styles.textarea}
              placeholder="Vertel hier je verhaal..."
              maxLength={this.state.maxLength}
              value={this.state.currentTweet}
              name="verhaal"
              required
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

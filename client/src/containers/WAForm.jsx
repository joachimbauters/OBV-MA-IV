import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./WAForm.module.css";

import Name from "../components/form/Name";
import Leeftijd from "../components/form/Leeftijd";
import Vragen from "../components/form/Vragen";
import Privacy from "../components/form/Privacy";
import Verhaal from "../components/form/Verhaal";

class WAForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      naam: "",
      leeftijd: "",
      vraag: "",
      privacy: false,
      verhaal: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { naam, leeftijd, vraag, privacy, verhaal } = this.state;
    alert(`Your story details: \n 
      Naam: ${naam} \n 
      Leeftijd: ${leeftijd} \n
      Vraag: ${vraag} \n
      privacy: ${privacy} \n
      verhaal: ${verhaal}`);
  };

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      if (currentStep === 3) {
        return (
          <button
            className={styles.terugwhite}
            type="button"
            onClick={this._prev}
          >
            Terug
          </button>
        );
      } else if (currentStep === 5) {
        return (
          <button
            className={styles.terugwhite}
            type="button"
            onClick={this._prev}
          >
            Terug
          </button>
        );
      } else {
        return (
          <button
            className={styles.terugpink}
            type="button"
            onClick={this._prev}
          >
            Terug
          </button>
        );
      }
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 5) {
      if (currentStep === 3) {
        return (
          <button
            className={styles.whitebutton}
            type="button"
            onClick={this._next}
          >
            Volgende
          </button>
        );
      } else {
        return (
          <button
            className={styles.pinkbutton}
            type="button"
            onClick={this._next}
          >
            Volgende
          </button>
        );
      }
    }
    return null;
  }

  render() {
    const { currentStep } = this.state;
    const { typevervoer, voertuignummer, stoelnummer } = this.props;
    return (
      <React.Fragment>
        <section
          className={
            currentStep === 3 || currentStep === 5
              ? styles.containerblue
              : styles.container
          }
        >
          <form onSubmit={this.handleSubmit} className={styles.form}>
            {currentStep > 1 ? (
              <div className={styles.backgrid}>{this.previousButton}</div>
            ) : (
              ""
            )}
            <Name
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              naam={this.state.naam}
              typevervoer={typevervoer}
              voertuignummer={voertuignummer}
              stoelnummer={stoelnummer}
            />
            <Leeftijd
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              leeftijd={this.state.leeftijd}
              naam={this.state.naam}
              typevervoer={typevervoer}
              voertuignummer={voertuignummer}
              stoelnummer={stoelnummer}
            />
            <Vragen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              vraag={this.state.vraag}
              typevervoer={typevervoer}
              voertuignummer={voertuignummer}
              stoelnummer={stoelnummer}
            />
            <Privacy
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              privacy={this.state.privacy}
              typevervoer={typevervoer}
              voertuignummer={voertuignummer}
              stoelnummer={stoelnummer}
            />
            <Verhaal
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              verhaal={this.state.verhaal}
              typevervoer={typevervoer}
              voertuignummer={voertuignummer}
              stoelnummer={stoelnummer}
            />

            <div className={styles.buttongrid}>{this.nextButton}</div>
          </form>
          <div className={styles.barcontainer}>
            {currentStep === 1 ? (
              <div className={styles.progressline37} />
            ) : currentStep === 2 ? (
              <div className={styles.progressline50} />
            ) : currentStep === 3 ? (
              <div className={styles.progressline62} />
            ) : currentStep === 4 ? (
              <div className={styles.progressline75} />
            ) : currentStep === 5 ? (
              <div className={styles.progressline87} />
            ) : (
              <div />
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WAForm;

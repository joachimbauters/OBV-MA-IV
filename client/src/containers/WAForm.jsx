import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./WAForm.module.css";
import vragen from "../constants/vragen.json";
import { inject, observer, PropTypes } from "mobx-react";

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
    const { naam, leeftijd, vraag, verhaal } = this.state;
    const {
      verhalenStore,
      typevervoer,
      voertuignummer,
      stoelnummer,
      history
    } = this.props;
    const arr1 = vragen.filter(element => element.id == vraag); // eslint-disable-line
    let date = new Date();
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    const newDate = date.toLocaleString("nl-BE", options);

    arr1.forEach(vraag => {
      verhalenStore
        .addVerhaal({
          naam: naam,
          leeftijd: leeftijd,
          vraag: vraag.vraag,
          verhaal: verhaal,
          typevervoer: typevervoer,
          voertuignummer: voertuignummer,
          stoelnummer: stoelnummer,
          date: newDate
        })
        .then(() => {
          history.push("/bedankt");
        });
    });
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
              vraag={this.state.vraag}
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

WAForm.propTypes = {
  verhalenStore: PropTypes.observableObject.isRequired
};

export default inject(`verhalenStore`)(observer(withRouter(WAForm)));
